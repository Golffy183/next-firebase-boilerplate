type InputRadioProps = {
  args: {
    id: string;
    name: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
  };
  label: string | JSX.Element;
};

export const InputRadio = (props: InputRadioProps) => {
  return (
    <div className="flex flex-row space-x-2 justify-center items-center">
      <input
        className="cursor-pointer bg-gray-100 border-gray-300 h-4 text-blue-600 w-4 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800 focus:ring-blue-500 focus:ring-2 dark:focus:ring-blue-600"
        type="radio"
        id={props.args.id}
        name={props.args.name}
        checked={props.args.checked}
        value={props.args.value}
        onChange={(e) => {
          props.args.onChange(e.target.value);
        }}
      />
      {props.label}
    </div>
  );
};

export default InputRadio;
