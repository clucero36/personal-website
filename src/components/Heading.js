import React from 'react';
import { Link as routerLink} from 'react-router-dom';

import {
    Box,
    Icon,
    Text,
    Link,
    HStack,
    Spacer,
} from '@chakra-ui/react';
import { 
    Gi3DStairs 
} from "react-icons/gi";

const Heading = props => {

    return (
        <Box p='2rem 1rem' {...props}>
            <HStack>
                <Icon w={6} h={6} as={Gi3DStairs} _hover={{ color: 'green.700' }}/>
                <Link variant='primary' to='/' as={routerLink}>
                    <Text>llucero</Text>
                </Link>
                <Spacer />
                <Link variant='primary' to='/articles' as={routerLink}>Articles</Link>
                <Link variant='primary' to='/projects' as={routerLink}>Projects</Link>
            </HStack>
        </Box>
    )
}

export default Heading;