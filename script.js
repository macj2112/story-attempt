function generateStory(elements) {
  const story = `
    Once upon a time, there was a ${elements.character} living in a ${elements.setting}.
    Their goal was to ${elements.goal}. However, they faced ${elements.conflict}.
    In an unexpected twist, ${elements.twist}.
    And so, their adventure unfolded with courage and determination.
  `;

  displayStory(story);
}

function displayStory(story) {
  const storyContainer = document.getElementById('storyContainer');
  storyContainer.innerText = story;
}
