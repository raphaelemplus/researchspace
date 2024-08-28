import * as React from 'react';
import ImageRegionEditorComponentMirador, { ImageRegionEditorProps, ImageRegionEditorConfig } from './ImageRegionEditor';

// Step 1: Extend the Original Component
export class ImageRegionEditorComponentMiradorWithRecursiveAnnotation extends ImageRegionEditorComponentMirador {
  // Override methods or lifecycle hooks as needed
  
  // For example, overriding componentDidMount:
  componentDidMount() {
    super.componentDidMount(); // Call the original method if needed
    // Add your custom logic for recursive annotations here
  }

  // Another example, overriding a custom method:
  someMethodToOverride() {
    // Custom logic here
  }
}

// Step 2: Create and Export Component
export type c = ImageRegionEditorComponentMiradorWithRecursiveAnnotation;
export const c = ImageRegionEditorComponentMiradorWithRecursiveAnnotation;
export const f = React.createFactory(c);
export default c;
