import { useFileSystem } from "@/context/FileContext"
import useResponsive from "@/hooks/useResponsive"
import cn from "classnames"
import ErrorBoundary from "../ErrorBoundary"
import Editor from "./Editor"
import FileTab from "./FileTab"

function EditorComponent() {
    const { openFiles } = useFileSystem()
    const { minHeightReached } = useResponsive()

    if (openFiles.length <= 0) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <h1 className="text-xl text-white">
                    No file is currently open.
                </h1>
            </div>
        )
    }

    return (
        <main
            className={cn("flex w-full flex-col overflow-x-auto md:h-screen", {
                "h-[calc(100vh-50px)]": !minHeightReached,
                "h-full": minHeightReached,
            })}
        >
            <FileTab />
            <ErrorBoundary
                fallback={
                    <div className="flex h-full w-full items-center justify-center">
                        <h1 className="text-xl text-white">
                            Editor failed to load. Please refresh the page.
                        </h1>
                    </div>
                }
            >
                <Editor />
            </ErrorBoundary>
        </main>
    )
}

export default EditorComponent
