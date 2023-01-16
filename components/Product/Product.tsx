import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import { Rating } from "../Rating/Rating";
import { Card } from "../Card/Card";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";

export const Product = ({ className, product, ...props }: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>

      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice && (
          <Tag className={styles.oldPrice} color="green">
            {priceRu(product.oldPrice - product.price)}
          </Tag>
        )}
      </div>

      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.mounth}>мес</span>
      </div>

      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>

      <div className={styles.tags}>
        {product.categories.map((category) => (
          <Tag key={category} className={styles.category} color="ghost">
            {category}
          </Tag>
        ))}
      </div>

      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
      <Divider className={styles.hr} />
      <div className={styles.description}>{product.description} </div>
      <div className={styles.feature}>fitches</div>

      <div className={styles.advBlock}>
        {product.advantages && (
          <div className={styles.advantages}>
            <div className={styles.advTitle}>Преимущества</div>
            <div>{product.advantages}</div>
          </div>
        )}
        {product.disadvantages && (
          <div className={styles.disadvantagesBLock}>
            <div className={styles.advTitle}>Недостатки</div>
            <div>{product.disadvantages}</div>
          </div>
        )}
      </div>

      <Divider className={styles.hr} />

      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow={"right"} className={styles.reviewButton}>
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
