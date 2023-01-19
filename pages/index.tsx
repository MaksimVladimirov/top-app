import { GetStaticProps } from "next";
import { useState } from "react";
import axios from "axios";

import { Htag } from "../components";
import { withLayout } from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";
import Category from "../components/Category/Category";
import styles from "../styles/home.module.css";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag="h1">OwlTop - лучший агрегатор онлайн курсов.</Htag>
      <ul className={styles.courses}>
        {menu.map((i) => (
          <Category key={i._id.secondCategory} category={i} />
        ))}
      </ul>
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.TopPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
