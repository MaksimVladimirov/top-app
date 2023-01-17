import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from "react";
import cn from "classnames";

import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import StarIcon from "./star.svg";

export const Rating = forwardRef(
  (
    { isEditable = false, rating, error, className, setRating, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
      constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
        return (
          <span
            className={cn(styles.star, {
              [styles.filled]: index < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(index + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(index + 1)}
            key={index}
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
            />
          </span>
        );
      });
      setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constructRating(i);
    };
    const onClick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
      if (e.code !== "Space" || !setRating) {
        return;
      }
      setRating(i);
    };

   return (
     <div
       {...props}
       ref={ref}
       className={cn(className, styles.ratingWrapper, {
         [styles.error]: error,
       })}
     >
       {ratingArray.map((r, index) => (
         <span key={index}>{r}</span>
       ))}
       {<span className={styles.errorMessage}>{error?.message}</span>}
     </div>
   );
  }
);
