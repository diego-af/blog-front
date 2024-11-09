import RichTextEditor from 'reactjs-tiptap-editor';
import 'reactjs-tiptap-editor/style.css';
import {extensions} from './config';

const TextEditor = ({
	setContent,
	content
}: {
	setContent: (value: string) => void;
	content: string;
}) => {
	const onChangeContent = (value: string) => {
		setContent(value);
	};

	return (
		<RichTextEditor
			output='html'
			content={content}
			onChangeContent={onChangeContent}
			extensions={extensions}
		/>
	);
};

export default TextEditor;
