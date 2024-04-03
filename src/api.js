export const fetchImages = async () => {
  try {
    const response = await fetch('https://api.unsplash.com/photos/?client_id=dxVRifDQUtKtqaw3LU29XXMaTYDxrkh2XHTxrlstc30&per_page=30');
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
