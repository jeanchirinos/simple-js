import { S_INFO_BOX } from 'components/StyledComponents';
import { Fragment } from 'react';
import { regexArray } from './regExp';

export default function TextArea({ code }) {
  const lines = code.split('\n');

  function checkErrors(match, lineNumber) {
    const groups = Object.entries(match.groups);

    return groups.map((group, index) => {
      const groupName = group[0],
        groupValue = group[1];

      if (groupValue === undefined) {
        return (
          <li
            key={index}
          >{`Línea ( ${lineNumber} ) sintaxis ERROR. Se esperaba un(a) ${groupName}`}</li>
        );
      } else {
        return <Fragment key={index} />;
      }
    });
  }

  return (
    <S_INFO_BOX>
      <ul>
        {lines.map((line, index) => {
          const lineNumber = index + 1;

          let lineMatched = false;

          return regexArray.map((regex, index) => {
            if (lineMatched) return <Fragment key={index} />;

            const match = line.match(regex);

            if (match) {
              lineMatched = true;
              return checkErrors(match, lineNumber);
            }

            if (index === regexArray.length - 1)
              return (
                <li key={index}>{`Línea ( ${lineNumber} ) sintaxis ERROR`}</li>
              );

            return <Fragment key={index} />;
          });

          // const match1 = line.match(regExp1),
          //   match2 = line.match(regExp2);

          // if (match1) {
          //   return checkErrors(match1, lineNumber);
          // } else if (match2) {
          //   return checkErrors(match2, lineNumber);
          // } else {
          //   return (
          //     <li key={index}>{`Línea ( ${lineNumber} ) sintaxis ERROR`}</li>
          //   );
          // }
        })}
      </ul>
    </S_INFO_BOX>
  );
}
