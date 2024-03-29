const notebooks = [
    {
      id: '2569ce0d517a7f06d3ea1f24',
      createdAt: '26/02/2022',
      description: 'K-means clustering algorithm will be employed to group time series data into clusters. The primary goal is to determine the count of distinct activities within the dataset and to identify clusters of individuals who participated in these activities together.',
      logo: '/assets/logos/clustering.png',
      title: 'Clustering',
      file: '/assets/notebooks/clustering.html',
      tags: ['Numpy', 'Pandas', 'KMeans', 'Matplotlib', 'Sklearn'],
    },
    {
      id: 'ed2b900870ceba72d203ec15',
      createdAt: '18/01/2022',
      description: 'This notebook focuses on data wrangling using two datasets: IRS SOI and Medicaid Data by State. It aims to produce a dataset showing medication costs per Medicaid enrollee by state, facilitating analysis of spending patterns and drug prescription variations among states.',
      logo: '/assets/logos/data_wrangling.png',
      title: 'Data Wrangling',
      file: '/assets/notebooks/data_wrangling.html',
      tags: ['Numpy', 'Pandas'],
    },
    {
      id: 'a033e38768c82fca90df3db7',
      createdAt: '26/02/2022',
      description: 'Utilize an understanding of how seasonality, trends, and noise interact in a time series to generate a dataset.',
      logo: '/assets/logos/time_series.png',
      title: 'Time Series',
      file: '/assets/notebooks/time_series.html',
      tags: ['Numpy', 'Pandas', 'Matplotlib', 'Spicy'],
    },
    {
      id: '1efecb2bf6a51def9869ab0f',
      createdAt: '16/05/2022',
      description: 'Examining the performance of machine learning models in a classification task to categorize wine into quality categories (0-10) based on input features like acidity, density, and more.',
      logo: '/assets/logos/intro_ml.png',
      title: 'Intro to Machine Learning',
      file: '/assets/notebooks/intro_machine_learning.html',
      tags: ['Numpy', 'Pandas', 'Matplotlib', 'Sklearn', 'Seaborn', 'Xgboost'],
    },
    {
      id: '1ed68149f65fbc6089b5fd07',
      createdAt: '28/04/2023',
      description: 'Using sentiment analysis to accurately categorize AI-related discussions on Reddit. It includes a comparative analysis of various machine learning models and an exploration of sentiment trends over time. To achieve these goals, the project employed machine learning algorithms. The Linear SVC model achieved an F1 Micro Score of 0.71, while BERT scored 0.69.',
      logo: '/assets/logos/sentiment_analysis.png',
      title: 'Artificial Intelligence Sentiment Analysis',
      file: '/assets/notebooks/sentiment_analysis_AI.html',
      tags: ['Numpy', 'Pandas', 'Matplotlib', 'Sklearn', 'Keras', 'Tensorflow', 'Torch', 'Bert'],
    },
    {
      id: '5dab321376eff6177407e887',
      createdAt: '10/03/2022',
      description: 'This project aims to reinforce understanding of core probability and hypothesis testing concepts. It has two parts: generative models and simulation, and data analysis, interpretation, and hypothesis testing. Each section provides guided problem-solving, with subsequent analysis applied to different questions.',
      logo: '/assets/logos/probability_and_hypothesis.png',
      title: 'Simulation and Hypothesis Testing',
      file: '/assets/notebooks/simulation-and-hypothesis-testing.html',
      tags: ['Numpy', 'Pandas', 'Scipy', 'Matplotlib'],
    },
    {
      id: '3dab321376eff6177407e887',
      createdAt: '20/08/2023',
      description: 'Analyzing student enrollment in Hawaii institutions. To facilitate comprehensive results assessment, individual graphs have been generated for each institution across multiple years.',
      logo: '/assets/logos/enrollment_students.png',
      title: 'Enrollment Hawaii Students',
      file: '/assets/notebooks/enrollment_hawaii_students.html',
      tags: ['Numpy', 'Pandas', 'Matplotlib'],
    },
    {
      id: '4dab321376eff6177407e887',
      createdAt: '10/09/2023',
      description: 'Geospatial visualizations depicting marriage statistics for same-sex and opposite-sex couples across the United States.',
      logo: '/assets/logos/opp-sex.png',
      title: 'Geospatial Visualizations',
      file: '/assets/notebooks/geospatial_visualizations.html',
      tags: ['Pandas', 'Plotly'],
    },
    {
      id: '6dab321376eff6177407e887',
      createdAt: '10/03/2022',
      description: 'Applying a Convolutional Neural Network (CNN) for classification tasks using the LFW People dataset, this talk has yielded F1 score of 0.85. This CNN architecture is tailored for effective facial recognition and classification, with potential applications in various real-world scenarios.',
      logo: '/assets/logos/lwf_faces.png',
      title: 'Lfw People',
      file: '/assets/notebooks/lfw_people.html',
      tags: ['Numpy', 'Pandas', 'Sklearn', 'Torch'],
    }
  ];

  export default notebooks;