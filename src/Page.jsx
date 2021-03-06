import React from 'react';

import Input from './Input';
import List from './List';

function Page({
  input, list, onAdd, onClickComplete, onChange,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Input onAdd={onAdd} input={input} onChange={onChange} />
      <List list={list} onClickComplete={onClickComplete} />
    </div>
  );
}

export default Page;
