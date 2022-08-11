import {
  Center,
  Input,
  InputGroup,
  InputLeftAddon,
  SearchIcon,
} from 'native-base';
import React from 'react';

function InputSearch({search}) {
  return (
    <Center mb={5}>
      <InputGroup>
        <InputLeftAddon
          borderWidth={0}
          opacity={'0.7'}
          w={'12'}
          bg={'#008080'}
          children={<SearchIcon size={5} color={'white'} />}
        />
        <Input
          borderColor={'#008080'}
          placeholderTextColor={'#fafafa'}
          color={'white'}
          width={'65%'}
          onChangeText={text => search(text)}
          placeholder="Buscar ciudad"
        />
      </InputGroup>
    </Center>
  );
}

export default InputSearch;
