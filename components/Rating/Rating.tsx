import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from "react";
import cn from "classnames";

import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import StarIcon from "./star.svg";

export const Rating = forwardRef(
  (
    { isEditable = false, rating, error, className, setRating, tabIndex, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
      constructRating(rating);
    }, [rating, tabIndex]);

    const computedFocus = (r: number, i: number): number => {
      if (!isEditable) {
        return -1;
      }
      if (!rating && i === 0) {
        return tabIndex ?? 0;
      }
      if (r === i + 1) {
        return tabIndex ?? 0;
      }
      return -1;
    };

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
            tabIndex={computedFocus(rating, index)}
            onKeyDown={handleKey}
            key={index}
            ref={(r) => ratingArrayRef.current?.push(r)}
            role={isEditable ? "slider" : ""}
            aria-invalid={error ? true : false}
            aria-valuenow={rating}
            aria-valuemax={5}
            aria-label={isEditable ? "Укажите рейтинг " : "рейтинг" + rating}
            aria-valuemin={1}
          >
            <StarIcon />
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

    const handleKey = (e: KeyboardEvent) => {
      if (!isEditable || !setRating) {
        return;
      }

      if (e.code === "ArrowRight" || e.code === "ArrowUp") {
        if (!rating) {
          setRating(1);
        } else {
          e.preventDefault();
          setRating(rating < 5 ? rating + 1 : 5);
        }
        ratingArrayRef.current[rating]?.focus();
      }

      if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
        e.preventDefault();
        setRating(rating > 1 ? rating - 1 : 1);
        ratingArrayRef.current[rating - 2]?.focus();
      }
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
        {
          <span role="alert" className={styles.errorMessage}>
            {error?.message}
          </span>
        }
      </div>
    );
  }
);
