## Assets

This folder contains global assets like fonts, color variables, sass mixins, favicons and images. 

Contents of this file has global aliases (`styles`, `fonts` and `images`) and contents are reachable all across the app.

**Styles**

```scss
@import "~styles/colors.scss";
@import "~styles/mixins.scss";

.Wrapper {
  @include myMagicalMixinThatMakesEverythingLookPerfect();
  background: $putio-primary;
}

```

**Components**

```jsx
import style from './styles.scss'; 
import Logo from "images/logo.png";

const MyExtremelyMagicalComponent = () => (
  <div className={style.Wrapper}>
    <image src={Logo} alt="Logo" />
  </div>
);

```

Please try to **avoid mixing global assets and local assets** as much as you can.
