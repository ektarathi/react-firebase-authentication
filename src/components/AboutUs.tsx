import * as React from "react";
import ListItemText from "./ListItemText";
export interface AboutUsProps {
	path: string;
}

const AboutUs: React.SFC<AboutUsProps> = () => {
	return (
		<div className="page-about">
			<div className="page-about__content">
                <div className="page-about__content page-about__content--heading">
                    <h1> About Us </h1>
                </div>
				<p>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using 'Content here, content here', making it
					look like readable English.
				</p>
				<br />
				<p>
					But I must explain to you how all this mistaken idea of denouncing
					pleasure and praising pain was born and I will give you a complete
					account of the system, and expound the actual teachings of the great
					explorer of the truth, the master-builder of human happiness. No one
					rejects, dislikes, or avoids pleasure itself, because it is pleasure,
					but because those who do not know how to pursue pleasure rationally
					encounter consequences that are extremely.
				</p>
				<br />
				<div className="page-about__image"></div>
				<br />
				<p>
					At vero eos et accusamus et iusto odio dignissimos ducimus qui
					blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
					et quas molestias excepturi sint occaecati cupiditate non provident,
					similique sunt in culpa qui officia deserunt mollitia animi, id est
					laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
					distinction.
				</p>
				<br />
                <h3>
                    1914 translation by H. Rackham
                </h3>
				<ListItemText />
				<p>
					At vero eos et accusamus et iusto odio dignissimos ducimus qui
					blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
					et quas molestias excepturi sint occaecati cupiditate non provident,
					similique sunt in culpa qui officia deserunt mollitia animi, id est
					laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
					distinction.
				</p>
				<br />
				<p>
					On the other hand, we denounce with righteous indignation and dislike
					men who are so beguiled and demoralized by the charms of pleasure of
					the moment, so blinded by desire, that they cannot foresee the pain
					and trouble that are bound to ensue; and equal blame belongs to those
					who fail in their duty through weakness of will, which is the same as
					saying through shrinking from toil and pain. These cases are perfectly
					simple and easy to distinguish. In a free hour,
				</p>
			</div>
		</div>
	);
};

export default AboutUs;
