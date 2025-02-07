import Editor from '@/Components/LexicalEditor/Editor';

export default function Create({ article = null }) {
    const { data, setData, post, put, processing } = useForm({
        title: article?.title || '',
        content: article?.content || '',
        // ... autres champs
    });

    const handleEditorChange = (editorState) => {
        // Convertir l'état de l'éditeur en HTML ou JSON selon vos besoins
        const content = JSON.stringify(editorState);
        setData('content', content);
    };

    return (
        <AuthenticatedLayout>
            <form onSubmit={handleSubmit}>
                {/* ... autres champs ... */}
                
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contenu
                    </label>
                    <Editor
                        onChange={handleEditorChange}
                        initialContent={data.content}
                    />
                </div>

                {/* ... reste du formulaire ... */}
            </form>
        </AuthenticatedLayout>
    );
} 