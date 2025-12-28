import type { CSSProperties } from 'react';

type JollyOrpheusClickProps = {
	onClick: () => void;
};

export default function JollyOrpheusClick({ onClick }: JollyOrpheusClickProps) {
	return (
		<button onClick={onClick}>
			<img src="/wreath.png" width={512} height={512} alt="Wreath" style={{cursor: 'pointer'}}/>
		</button>
	)
}