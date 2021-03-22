import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import styles from './Dropdown.scss';

import { Dropdown, Icon, Menu } from 'semantic-ui-react';

const MenuExampleAttached = () => (
  <div>
    <Menu attached='top'>
      <Dropdown className={styles.dropdown} text='Select a category' simple item>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Icon name='dropdown' />
            <span text='text'>Bed</span>
            <Dropdown.Menu>
              <Dropdown.Item>Option A</Dropdown.Item>
              <Dropdown.Item>Option B</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon name='dropdown' />
            <span text='text'>Chair</span>
            <Dropdown.Menu>
              <Dropdown.Item>Option A</Dropdown.Item>
              <Dropdown.Item>Option B</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  </div>
);

export default MenuExampleAttached;
