import { useEffect, useState } from "react";

import { Htag, Button, Paragraph, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("Counter" + counter);
    return function cleanUp() {
      console.log("unmount" + counter);
    };
  }, []);
  return (
    <>
      <Htag tag="h1">{counter} </Htag>
      <Button appearance="primary" arrow="right" onClick={() => setCounter((x) => x + 1)}>
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right" onClick={() => setCounter((x) => x - 1)}>
        Кнопка
      </Button>
      <Paragraph size="p14">Маленький</Paragraph>
      <Paragraph size="p16">Средний</Paragraph>
      <Paragraph size="p18">Большой</Paragraph>
      <Tag size="s">ghost</Tag>
      <Tag size="m" color="red">
        red
      </Tag>
      <Tag size="s" color="green">
        green
      </Tag>
      <Tag color="primary">lol</Tag>
      <Rating rating={4} />
    </>
  );
}
