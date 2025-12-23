import { useMemo, useState } from 'react';
import './App.css';
import Button from './components/Button';
import CheckInput from './components/CheckInput';
import Modal from './components/Modal';
import { pages } from './mock';

function App() {
  const initial = useMemo(() => {
    const obj = {};
    pages.forEach((page) => {
      const key = page.page;
      obj[key] = false;
    });
    return obj;
  }, []);

  const [selected, setSelected] = useState(initial);

  const keys = useMemo(() => pages.map((p) => p.page), []);

  const allChecked = keys.length > 0 && keys.every((k) => selected[k]);

  const toggleAll = (next) => {
    setSelected((prev) => {
      const updated = { ...prev };
      keys.forEach((k) => (updated[k] = next));
      return updated;
    });
  };

  const toggleOne = (key) => (next) => {
    setSelected((prev) => ({ ...prev, [key]: next }));
  };

  return (
    <div className="flex justify-center items-center">
      <Modal>
        <CheckInput
          label={'All pages'}
          checked={allChecked}
          onChange={toggleAll}
        />
        <div className="py-[10px] px-[15px]">
          {' '}
          <div className="bg-[#CDCDCD] w-[340px] h-[0.7px]" />
        </div>
        <div className="overflow-y-auto h-[164px] overflow-hidden no-scrollbar">
          {pages.map((page) => {
            return (
              <CheckInput
                key={page.page}
                label={page.page}
                checked={!!selected[page.page]}
                onChange={toggleOne(page.page)}
              />
            );
          })}
        </div>
        <div className="py-[10px] px-[15px]">
          {' '}
          <div className="bg-[#CDCDCD] w-[340px] h-[0.7px]" />
        </div>
        <div className="flex justify-center items-center w-full">
          <Button />
        </div>
      </Modal>
    </div>
  );
}

export default App;
