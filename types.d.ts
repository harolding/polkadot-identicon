import React from 'react';

export type IdentityIconProps = {
	className?: string,
	id: string | Uint8Array,
	sixPoint?: boolean,
	size: number,
	style?: { [index: string]: any }
};

export default class Identicon extends React.Component<IdentityIconProps, {}> {
}
