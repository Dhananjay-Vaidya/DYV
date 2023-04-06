import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-laptop"></i>,
    title: 'Cost Friendly',
    content: 'Just requires your day to day use device to scan to get results quickly.',
  },
  {
    key: '2',
    icon: <i class="fas fa-bolt"></i>,
    title: 'Easily Accessible',
    content: 'Easy to use and primarily verify your medicines authenticity.',
  },
  {
    key: '3',
    icon: <i className="fas fa-atom"></i>,
    title: 'Better Accuracy',
    content: 'Artificial Intelligence and Machine Learning when introduced in this sector,provides a larger scope for easy detection of such products.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Info</h2>
        </div>
        <div className="contentHolder">
          <p>
          Falsified medicines may lead to avoidable morbidity, mortality, drug resistance, early death or treatment failure, as well as loss of faith in health systems, especially in low-income and middle-income countries, and therefore a reliable supply of good-quality medicines is essential for public health 1-4. However, it has been difficult to quantify the impact on patients’ health, because of fragmented and incomplete reporting of incidents and the consequences of falsified medicines range from no effect at all to enabling disease progression 5, or to lethal toxicity, as in the case of diethylene glycol-containing cough syrup 6, 7. Also, inadequate doses of anti-infectives may lead to drug resistance 8, 9. With the exponential increase in internet connectivity, those engaged in distribution of falsified medical products have gained access to a global market place 10, and the growth of a culture of self-diagnosis and self-prescribing has led to the emergence of thousands of unregulated websites providing unsupervised access to medical products with no guarantee of authenticity 11. Thus, what was once considered a problem suffered by developing and low-income countries has now become an issue for all, although low- and middle-income countries and areas of conflict or unrest are still most vulnerable to falsified medical products owing to inadequate health-related regulatory systems.

The purpose of this research is to study the literature describing the health consequences of falsified medicines, focusing on mortality and morbidity, as well as the scale of the issue, the geographic extent, the medicines affected and the harm caused at both the individual and population levels. We do not attempt to present an exhaustive analysis of every health consequence of substandard or falsified drugs, but aim to give an overview of the actual impact of these products on public health. It should be noted that this article deals only with falsified drugs and not with substandard drugs resulting from inadequate quality control during manufacture or distribution, although such drugs are also likely to have a substantial impact on public health.

          </p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;