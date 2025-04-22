import { visit } from 'unist-util-visit';
import slugify from 'slugify';

// Remark plugin that strips leading emojis and symbols from heading IDs.
export default function stripEmojisSlug() {
  return function (tree) {
    visit(tree, 'heading', (node) => {
      let text = '';
      for (const child of node.children) {
        if (child.type === 'text') {
          text += child.value;
        }
      }

      const clean = slugify(
        text.replace(/^[^a-zA-Z0-9]+/, '').trim(),
        { lower: true }
      );

      if (!node.data) node.data = {};
      if (!node.data.hProperties) node.data.hProperties = {};
      node.data.id = clean;
      node.data.hProperties.id = clean;
    });

    return tree;
  };
}
