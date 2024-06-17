import { CodeBlock, dracula } from 'react-code-blocks';

function MyCodeBlock({ code, language, showLineNumbers }) {
  return (
    <CodeBlock
      text={"cosole.log('aniruddha')"}
      language={"javascript"}
      showLineNumbers={true}
      theme={dracula}
    />
  );
}

export default MyCodeBlock;