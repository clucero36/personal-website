import React from 'react';
import { Link as routerLink} from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
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
        <Box p='3rem 0' w={['95%', '85%']} m='0 auto' {...props}>
            <HStack>
                <Icon w={6} h={6} as={Gi3DStairs} _hover={{ color: 'green.700' }}/>
                <Link variant='primary' to='/' as={routerLink}>
                    <Text>llucero</Text>
                </Link>
                <Spacer />
                <HStack gap={[1, 1, 6]}>
                    <Link variant='primary' to='/projects' as={routerLink}>Projects</Link>
                    <Link variant='primary' to='/genart' as={routerLink}>Generative Art</Link>
                    <ColorModeSwitcher/>
                </HStack>
            </HStack>
        </Box>
    )
}

export default Heading;