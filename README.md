# TipTap POC

TipTap is designed for intricate rich text editing based on ProseMirror's architecture.

## Concepts
### Structure
Schema defines the structure of a document. A document is a tree of headings, paragraphs and other elements which are called nodes and it works in combination of marks (bold, emphais etc).

### Content
The document is stored as a state. All changes are applied as transactions to the state. The state has details about the:
- Current content
- Cursor position
- Selection


### Extensions
Extensions adds:
- Nodes (e.g `Heading`, `Table`, `CodeBlock` etc)
- Marks (e.g `Bold`, `Strike`, `Italic` etc)
- Functionalities (e.g `FileHandler`, `FloatingMenu`, `TextAlign`)

<hr style="height: 3px; background: linear-gradient(to right, #595A88, #66C7F4); margin: 20px 0;"/>


## Usage
There are 3 main elements while configuring a TipTap component:
- Editor
- Content 
- Extensions

### Editor

#### Ways of configuring the editor
The editor can be created in multiple ways
- Using EditorProvider context
    ```jsx
        import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
        import StarterKit from '@tiptap/starter-kit'

        // define your extension array
        const extensions = [StarterKit]

        const content = '<p>Hello World!</p>'

        const Tiptap = () => {
        return (
            <EditorProvider extensions={extensions} content={content}>
            <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
            <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
            </EditorProvider>
        )
        }

        export default Tiptap
    ```
- `useEditor` hook (Avoid)
    ```jsx
        import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
        import StarterKit from '@tiptap/starter-kit'

        // define your extension array
        const extensions = [StarterKit]

        const content = '<p>Hello World!</p>'

        const Tiptap = () => {
        const editor = useEditor({
            extensions,
            content,
        })

        return (
            <>
                <EditorContent editor={editor} />
                <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
                <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
            </>
        )
        }

        export default Tiptap
        
    ```
 > Note : Preferrably use EditorProvider to access it in other components using the useCurrentEditor hook.

#### Consuming editor in other components

The editor if implemented using the EditorProvider context can be access using useCurrentEditor hook in the child components.

```jsx
import { useCurrentEditor } from '@tiptap/react'

const EditorJSONPreview = () => {
  const { editor } = useCurrentEditor()

  return <pre>{JSON.stringify(editor.getJSON(), null, 2)}</pre>
}
```

#### Before and after slots

Define the before and after components in respect to the content. 

```jsx
<EditorProvider
  extensions={extensions}
  content={content}
  slotBefore={<MyEditorToolbar />}
  slotAfter={<MyEditorFooter />}
/>
```