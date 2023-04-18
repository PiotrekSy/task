import React from 'react';
import FurthestUsers from './FurthestUsers';
import { render, screen } from '@testing-library/react';

test('renders correct text content', () => {
    const mockUsersData = [
        {
            name: {
                firstname: 'John',
                lastname: 'Doe'
            },
            address: {
                city: 'Kilcoole',
                geolocation: {
                    long: -6.062951,
                    lat: 54.145102
                }
            }
        },
        {
            name: {
                firstname: 'Derek',
                lastname: 'Powell'
            },
            address: {
                city: 'San Antonio',
                geolocation: {
                    long: -98.493629,
                    lat: 29.424122
                }
            }
        }
    ];
    jest.spyOn(React, 'useContext').mockReturnValue(mockUsersData);
    render(<FurthestUsers />);
    expect(screen.getByTestId('title')).toHaveTextContent('- John Doe from Kilcoole and Derek Powellfrom San Antonio');
    // console.log(screen.getByTestId('title'))
});



