import { Htag, Button, Paragraph, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1"> </Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
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
    </>
  );
}
