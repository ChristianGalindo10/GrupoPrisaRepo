import "./textDivider.css";

const TextDivider = ({ text }) => {
  const splitTextIntoThreeLines = (text) => {
    const length = text.length;
    const partLength = Math.ceil(length / 3);

    const findSplitPoint = (str, start, end) => {
      let splitPoint = end;
      for (let i = start; i <= end; i++) {
        if (str[i] === " " || str[i] === "." || str[i] === ",") {
          splitPoint = i;
        }
      }
      return splitPoint;
    };

    const line1End = findSplitPoint(text, 0, partLength);
    const line2End = findSplitPoint(text, line1End + 1, line1End + partLength);
    const line1 = text.slice(0, line1End).trim();
    const line2 = text.slice(line1End, line2End).trim();
    const line3 = text.slice(line2End).trim();

    return [line1, line2, line3];
  };

  const [line1, line2, line3] = splitTextIntoThreeLines(text);

  return (
    <div className="text-divider">
      <div>{line1}</div>
      <div>{line2}</div>
      <div>{line3}</div>
    </div>
  );
};
export default TextDivider;
