import { FunctionalComponent, h } from 'vue';

interface Props {
  id: string;
}

const Icon: FunctionalComponent<Props> = ({ id }) => (
  h('svg', {
    class: `icon icon-${id}`,
  }, [
    h('use', {
      'xlink:href': `#${id}`,
    }),
  ])
);

Icon.inheritAttrs = false;

export default Icon;
