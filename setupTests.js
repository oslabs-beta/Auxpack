import {
  configure, shallow, render, mount,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import toJson from 'enzyme-to-json';
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { JSDOM } from 'jsdom';

const dom = new JSDOM();

configure({ adapter: new Adapter() });

global.document = dom.window.document;
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
global.createShallow = createShallow;
global.createRender = createRender;
global.createMount = createMount;
