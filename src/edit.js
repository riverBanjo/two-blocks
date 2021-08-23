/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * 
 */
 import { TextControl } from '@wordpress/components';
 import { SelectControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<TextControl
                label={ __( 'Search Term', 'two-blocks' ) }
                value={ attributes.searchTerm }
                onChange={ ( searchVal ) => setAttributes( { searchTerm: searchVal } ) }
            />
			<SelectControl
				label={ __( 'Image Quantity', 'two-blocks' ) }
				value={ attributes.imageQuantity }
				options={ [
					{ label: '3', value: '3' },
					{ label: '4', value: '4' },
					{ label: '5', value: '5' },
					{ label: '6', value: '6' }
				] }
				onChange={ ( quantityVal ) => setAttributes( { imageQuantity: quantityVal } ) }
			/>
		</div>
	);
}
