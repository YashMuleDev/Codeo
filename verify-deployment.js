#!/usr/bin/env node

/**
 * Deployment Verification Script for Codeo
 * Run this before deploying to ensure everything is configured correctly
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Codeo Deployment Configuration...\n');

let errors = 0;
let warnings = 0;

// Check if required files exist
const requiredFiles = [
    'client/package.json',
    'server/package.json',
    'client/.env.example',
    'server/.env.example',
    'client/vercel.json',
    'server/render.yaml',
    'DEPLOYMENT.md',
    'QUICK-DEPLOY.md'
];

console.log('📁 Checking required files...');
requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`  ✅ ${file}`);
    } else {
        console.log(`  ❌ ${file} - MISSING`);
        errors++;
    }
});

// Check if .env files are NOT committed
console.log('\n🔒 Checking .env files are not committed...');
const envFiles = ['client/.env', 'server/.env'];
envFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`  ⚠️  ${file} exists (make sure it's in .gitignore)`);
        warnings++;
    } else {
        console.log(`  ✅ ${file} not found (good - use .env.example)`);
    }
});

// Check .gitignore
console.log('\n📝 Checking .gitignore...');
if (fs.existsSync('.gitignore')) {
    const gitignore = fs.readFileSync('.gitignore', 'utf8');
    if (gitignore.includes('.env')) {
        console.log('  ✅ .env is in .gitignore');
    } else {
        console.log('  ❌ .env is NOT in .gitignore');
        errors++;
    }
    if (gitignore.includes('node_modules')) {
        console.log('  ✅ node_modules is in .gitignore');
    } else {
        console.log('  ⚠️  node_modules should be in .gitignore');
        warnings++;
    }
} else {
    console.log('  ❌ .gitignore not found');
    errors++;
}

// Check package.json scripts
console.log('\n⚙️  Checking build scripts...');

const serverPackage = JSON.parse(fs.readFileSync('server/package.json', 'utf8'));
if (serverPackage.scripts.build && serverPackage.scripts.start) {
    console.log('  ✅ Server has build and start scripts');
} else {
    console.log('  ❌ Server missing build or start scripts');
    errors++;
}

const clientPackage = JSON.parse(fs.readFileSync('client/package.json', 'utf8'));
if (clientPackage.scripts.build) {
    console.log('  ✅ Client has build script');
} else {
    console.log('  ❌ Client missing build script');
    errors++;
}

// Check for common issues
console.log('\n🔧 Checking for common issues...');

// Check if server has CORS package
if (serverPackage.dependencies.cors) {
    console.log('  ✅ CORS package installed');
} else {
    console.log('  ❌ CORS package missing');
    errors++;
}

// Check if server has socket.io
if (serverPackage.dependencies['socket.io']) {
    console.log('  ✅ Socket.IO installed');
} else {
    console.log('  ❌ Socket.IO missing');
    errors++;
}

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Verification Summary:');
console.log('='.repeat(50));

if (errors === 0 && warnings === 0) {
    console.log('✅ All checks passed! Ready to deploy! 🚀');
    console.log('\nNext steps:');
    console.log('1. Push your code to GitHub');
    console.log('2. Follow QUICK-DEPLOY.md for deployment');
    process.exit(0);
} else {
    if (errors > 0) {
        console.log(`❌ ${errors} error(s) found`);
    }
    if (warnings > 0) {
        console.log(`⚠️  ${warnings} warning(s) found`);
    }
    console.log('\nPlease fix the issues above before deploying.');
    process.exit(1);
}
