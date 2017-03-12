import races from './';

export default [
	{
		key: 'aarakocra',
		label: 'Aarakocra',
		classFunction: races.Aarakocra
	},
	{
		key: 'aasimar',
		label: 'Aasimar',
		subRaces: [
			{key: 'fallenAasimar', label: 'Fallen', classFunction: races.FallenAasimar},
			{key: 'protectorAasimar', label: 'Protector', classFunction: races.ProtectorAasimar},
			{key: 'scourgeAasimar', label: 'Scourge', classFunction: races.ScourgeAasimar}
		]
	},
	{
		key: 'bugbear',
		label: 'Bugbear',
		classFunction: races.Bugbear
	},
	{
		key: 'dragonborn',
		label: 'Dragonborn',
		classFunction: races.Dragonborn
	},
	{
		key: 'dwarf',
		label: 'Dwarf',
		subRaces: [
			{key: 'hillDwarf', label: 'Hill', classFunction: races.HillDwarf},
			{key: 'mountainDwarf', label: 'Mountain', classFunction: races.MountainDwarf},
			{key: 'duergar', label: 'Duergar', classFunction: races.Duergar}
		]
	},
	{
		key: 'elf',
		label: 'Elf',
		subRaces: [
			{key: 'highElf', label: 'High', classFunction: races.HighElf},
			{key: 'woodElf', label: 'Wood', classFunction: races.WoodElf},
			{key: 'darkElf', label: 'Dark', classFunction: races.DarkElf}
		]
	},
	{
		key: 'firbolg',
		label: 'Firbolg',
		classFunction: races.Firbolg
	},
	{
		key: 'genasi',
		label: 'Genasi',
		subRaces: [
			{key: 'airGenasi', label: 'Air', classFunction: races.AirGenasi},
			{key: 'earthGenasi', label: 'Earth', classFunction: races.EarthGenasi},
			{key: 'fireGenasi', label: 'Fire', classFunction: races.FireGenasi},
			{key: 'waterGenasi', label: 'Water', classFunction: races.WaterGenasi}
		]
	},
	{
		key: 'gnome',
		label: 'Gnome',
		subRaces: [
			{key: 'forestGnome', label: 'Forest', classFunction: races.ForestGnome},
			{key: 'rockGnome', label: 'Rock', classFunction: races.RockGnome},
			{key: 'deepGnome', label: 'Deep', classFunction: races.DeepGnome}
		]
	},
	{
		key: 'goblin',
		label: 'Goblin',
		classFunction: races.Goblin
	},
	{
		key: 'goliath',
		label: 'Goliath',
		classFunction: races.Goliath
	},
	{
		key: 'halfElf',
		label: 'Half-elf',
		classFunction: races.HalfElf
	},
	{
		key: 'halfOrc',
		label: 'Half-orc',
		classFunction: races.HalfOrc
	},
	{
		key: 'halfling',
		label: 'Halfling',
		subRaces: [
			{key: 'lightfootHalfling', label: 'Lightfoot', classFunction: races.LightfootHalfling},
			{key: 'stoutHalfling', label: 'Stout', classFunction: races.StoutHalfling},
			{key: 'ghostwiseHalfling', label: 'Ghostwise', classFunction: races.GhostwiseHalfling}
		]
	},
	{
		key: 'hobgoblin',
		label: 'Hobgoblin',
		classFunction: races.Hobgoblin
	},
	{
		key: 'human',
		label: 'Human',
		subRaces: [
			{key: 'regularHuman', label: 'Regular', classFunction: races.RegularHuman},
			{key: 'variantHuman', label: 'Variant', classFunction: races.VariantHuman}
		]
	},
	{
		key: 'kenku',
		label: 'Kenku',
		classFunction: races.Kenku
	},
	{
		key: 'kobold',
		label: 'Kobold',
		classFunction: races.Kobold
	},
	{
		key: 'lizardfolk',
		label: 'Lizardfolk',
		classFunction: races.Lizardfolk
	},
	{
		key: 'orc',
		label: 'Orc',
		classFunction: races.Orc
	},
	{
		key: 'tabaxi',
		label: 'Tabaxi',
		classFunction: races.Tabaxi
	},
	{
		key: 'tiefling',
		label: 'Tiefling',
		subRaces: [
			{key: 'regularTiefling', label: 'Regular', classFunction: races.RegularTiefling},
			{key: 'feralTiefling', label: 'Feral', classFunction: races.FeralTiefling}
		]
	},
	{
		key: 'triton',
		label: 'Triton',
		classFunction: races.Triton
	},
	{
		key: 'yuanTi',
		label: 'Yuan-Ti (Pureblood)',
		classFunction: races.YuanTi
	}
];