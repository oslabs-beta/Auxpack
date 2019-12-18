import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { createShallow } from '@material-ui/core/test-utils';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
global.createShallow = createShallow;
