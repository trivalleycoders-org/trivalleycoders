db = new Mongo().getDB('tvcwebsite');
db.projects.remove({});
db.projects.insert([
  {
    projectName: 'TVC Website',
    ownerName: 'Laura/Sharmina',
    projectType: 'Website',
    technologies: 'React / Redux / Express',
  },
  {
    projectName: 'Highlight-Reel',
    ownerName: 'Chad',
    projectType: 'Mobile App',
    technologies: 'React Native',
  },
  {
    projectName: 'Project Name',
    ownerName: 'Owner Name',
    projectType: 'App Type',
    technologies: 'Technologies / Used',
  },
  {
    projectName: 'Project Name',
    ownerName: 'Owner Name',
    projectType: 'App Type',
    technologies: 'Technologies / Used',
  },
  {
    projectName: 'Project Name',
    ownerName: 'Owner Name',
    projectType: 'App Type',
    technologies: 'Technologies / Used',
  },
  {
    projectName: 'Project Name',
    ownerName: 'Owner Name',
    projectType: 'App Type',
    technologies: 'Technologies / Used',
  },
  {
    projectName: 'Project Name',
    ownerName: 'Owner Name',
    projectType: 'App Type',
    technologies: 'Technologies / Used',
  },
]);
db.projects.createIndex({ ownerName: 1 });
