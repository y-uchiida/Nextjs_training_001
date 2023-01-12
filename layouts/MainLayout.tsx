import React, { CSSProperties, ReactNode } from 'react'
import { SideBar } from '@/components/SideBar';

type Props = {
	children: ReactNode
}

const wrapperStyle: CSSProperties = {
	display: "flex"
}

export const MainLayout = ({ children }: Props) => {
	return (
		<div style={wrapperStyle}>
			<SideBar />
			{children}
		</div>
	)
}
