import React, { useRef } from 'react';
import { View } from 'remax/one';
import { Cascade, CascadePopup, Cell, Filter } from 'annar';
import { Block, Frame } from '../../common';
import { Categorys } from '../../mock';

const options1 = [
  {
    key: '0',
    value: '1000',
  },
  {
    key: '1',
    value: '2000',
  },
  {
    key: '2',
    value: '3000',
  },
];

export default () => {
  const [selector, setSelector] = React.useState<any[]>([]);

  const [value3, setValue3] = React.useState('0');

  const handleBasicChange = (value: any[]) => {
    console.log(value);
  };

  const handleChange = (value: any[]) => {
    console.log(value);
    setSelector(value);
  };

  const handleChange1 = (value: any[]) => {
    console.log(value);
  };

  // Filter
  const seletorRef = useRef<any>();
  const handleChange2 = (value: any[], selectOptions: any[], isLast: boolean) => {
    console.log(value);
    if (isLast) {
      seletorRef.current.toggle();
    }
  };

  return (
    <Frame grayBg style={{ overflow: 'hidden' }}>
      <Block title="Basic">
        <Cascade name="品类" options={Categorys} onChange={handleBasicChange} />
      </Block>
      <Block title="ChangeOnSelect">
        <Cascade
          name="品类"
          changeOnSelect
          options={Categorys}
          onChange={handleChange}
          value={selector}
        />
      </Block>
      <Block title="With Filter">
        <Filter zIndex={998}>
          <Filter.Item title="品类" ref={seletorRef}>
            <Cascade name="品类" options={Categorys} onChange={handleChange2} />
          </Filter.Item>
          <Filter.Item
            label="价格"
            value={value3}
            options={options1}
            onChange={e => setValue3(e.key)}
          />
        </Filter>
      </Block>
      <View style={{ height: '500px' }} />
      <Block title="With Popup">
        <Cell label="品类" arrow>
          <CascadePopup
            name="品类"
            placeholder="请选择"
            options={Categorys}
            onChange={handleChange1}
            height="1024px"
            textAlign="right"
          />
        </Cell>
      </Block>
    </Frame>
  );
};
