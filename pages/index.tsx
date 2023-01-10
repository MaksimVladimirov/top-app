import { useState } from "react";

import { Htag, Button, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1"> Header </Htag>
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
      <Rating rating={4} isEditable />
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
