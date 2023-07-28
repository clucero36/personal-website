import { whiten } from '@chakra-ui/theme-tools';

export const LinkStyles = {

    baseStyle: {},

    sizes: {},

    variants:  {
        primary: {
            _hover: {
                color: whiten('teal.200', 30),
            },
            _focus: {
                color: 'teal.200',
                boxShadow: 'none',
            }
        },

    },

    defaultProps: {},
} 