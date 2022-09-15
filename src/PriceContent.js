import style from "./scss/PriceContent.module.css";
import ListContent from "./ListContent";

const PriceContent = function () {
  return (
    <section className={style.price}>
      <div className={style.price__box}>
        <div className={style.price__content}>
          <h2>Join our community</h2>
          <span>30-day, hassle-free money back guarantee</span>
          <p>
            Gain access to our full library of tutotials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>

        <div className={style.price__value}>
          <h2>Monthly Subscription</h2>
          <div className={style.price__cost}>
            <span className={style.cost}>$29</span>
            <span className={style.month}>per month</span>
          </div>
          <p>Full access for less than $1 a day</p>
          <button>Sign-Up</button>
        </div>

        <div className={style.price__benefits}>
          <h2>Why Us</h2>
          <ListContent price__list={style.price__list} />
        </div>
      </div>
    </section>
  );
};

export default PriceContent;
