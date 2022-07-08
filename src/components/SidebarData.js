/* eslint-disable import/prefer-default-export */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GoIcons from 'react-icons/go';

export const SidebarData = [
  {
    title: 'Cars',
    path: '/',
    icon: <FaIcons.FaCarSide />,
    cName: 'nav-text',
  },
  {
    id: 1,
    title: 'Add Car',
    path: '/',
    icon: <FaIcons.FaCarSide />,
    cName: 'nav-text',
  },
  {
    id: 2,
    title: 'Reservations',
    path: '/reservations',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Add Reservation',
    path: '/add-reservation',
    icon: <AiIcons.AiFillFileAdd />,
    cName: 'nav-text',
  },
  {
    title: 'Delete Car',
    path: '/delete-car',
    icon: <AiIcons.AiOutlineDeleteColumn />,
    cName: 'nav-text',
  },
  {
    title: 'Sign Out',
    path: '/sign-out',
    icon: <GoIcons.GoSignOut />,
    cName: 'nav-text',
  },

];
