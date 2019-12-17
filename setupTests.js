import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils'

configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
global.createShallow = createShallow;
global.createRender = createRender;
global.createMount = createMount;