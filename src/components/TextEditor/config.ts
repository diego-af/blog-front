import {
	BaseKit,
	Blockquote,
	Bold,
	BulletList,
	Clear,
	FontFamily,
	FontSize,
	Image,
	ImageUpload,
	Italic,
	Link,
	Heading,
	TextAlign,
	Emoji,
	locale
} from 'reactjs-tiptap-editor';
import 'reactjs-tiptap-editor/style.css';
locale.setLang('pt_BR');
const extensions = [
	BaseKit.configure({
		// Show placeholder
		placeholder: {
			showOnlyCurrent: true
		},

		// Character count
		characterCount: {
			limit: 50_000
		}
	}),
	Blockquote,
	ImageUpload.configure({
		upload: (files: File) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(URL.createObjectURL(files));
				}, 500);
			});
		}
	}),
	Bold,
	BulletList,
	Clear,
	FontFamily,
	FontSize,
	Image,
	Italic,
	Link,
	Heading,
	TextAlign,
	Emoji
	// Import Extensions Here
];

const DEFAULT = '';

export {extensions, DEFAULT};
