import * as Sc from './HomeWelcome.styled';

export const HomeWelcome = () => {
	return (
		<>
			<Sc.Figure>
				<img src="/launch.png" alt="A rocket is being launched" />
				<figcaption>
					Illustration by{' '}
					<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
						Icons 8
					</a>
				</figcaption>
			</Sc.Figure>
			<Sc.Heading>Welcome to Boilertowns</Sc.Heading>
		</>
	);
};
