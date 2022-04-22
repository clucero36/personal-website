import { extendTheme } from "@chakra-ui/react";
import { GlobalStyles as styles } from './globalStyles';
import { LinkStyles as Link } from './components/link';

export const overrides = extendTheme({
    styles, 

    components: {
      Link,
    }
})