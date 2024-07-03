import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionRow = ({ onPromptClick }) => {
  /*
  const prompts = [
    'How does similarity search work with a Vector DB?',
    'What is DataStax Enterprise?',
    'How does CassIO work?',
    'What are some common FAQs about Astra?',
  ];
  */


  const prompts = [
    '오늘 뭐하지?',
    '오늘 뭐입지?',
    '오늘 뭐먹지?',
    '오늘 뭐볼까?',
  ];



  return (
    <div className="flex flex-row flex-wrap justify-start items-center py-4 gap-2">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton key={`suggestion-${index}`} text={prompt} onClick={() => onPromptClick(prompt)} />
      ))}
    </div>
  );
};

export default PromptSuggestionRow;
