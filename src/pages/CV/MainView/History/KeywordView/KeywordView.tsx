import { D3Object } from "@components/CirclePacking/CirclePacking.class";
import WorldCloud from "@components/WorldCloud";
import { WordCloudObjectList } from "@components/WorldCloud/WorldCloud";
import { isObject } from "@utils/typeCheckers";
import React, { useCallback, useMemo } from "react";
import skills from "./skills.json";

interface NestedObject {
  [key: string]: NestedObject | string[];
}

interface KeywordViewProps {
  contentId: string | undefined;
}

const KeywordView = ({ contentId }: KeywordViewProps) => {
  const formatSkillsData = useCallback(
    (
      data: NestedObject = skills,
      filter: string | undefined = undefined
    ): D3Object[] => {
      return Object.keys(data).reduce((acc: D3Object[], key) => {
        const value: NestedObject | string[] = data[key];
        if (isObject(value)) {
          const children = formatSkillsData(value as NestedObject, filter);
          const returnValue: D3Object = {
            name: key,
            children,
            size: children.reduce((sum, c) => sum + (c.size || 0), 0),
          };

          if (returnValue.children) {
            return [...acc, returnValue];
          }
          return acc;
        } else if (Array.isArray(value)) {
          return [
            ...acc,
            {
              name: key,
              size: !filter || value.includes(filter) ? 1 : 0,
            },
          ];
        }
        return acc;
      }, []);
    },
    []
  );

  const formattedSkills = useMemo(
    () => ({
      name: "skills",
      children: formatSkillsData(skills, contentId),
      size: Math.abs(Math.random() * 10),
    }),
    [contentId, formatSkillsData]
  );

  const formattedWordList = useMemo(() => {
    const getWordList = (
      skills: D3Object[],
      value: number
    ): WordCloudObjectList =>
      skills.reduce(
        (wordList: WordCloudObjectList, skill: D3Object, index: number) => {
          if (skill.children) {
            return [...wordList, ...getWordList(skill.children, value + index)];
          } else if (skill.size) {
            return [
              ...wordList,
              {
                text: skill.name,
                color: value,
                value: 1,
              },
            ];
          } else return wordList;
        },
        []
      );
    return getWordList(formattedSkills.children, 0);
  }, [formattedSkills.children]);

  return <WorldCloud wordList={formattedWordList} />;
};

export default KeywordView;
