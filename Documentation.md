# Le composant `box-project_user.tsx`

Ce composant est appelé dans le composant `user-profile` et n'affiche que les projets publiés, pas les drafts.

# Erreur du composant `SlideApport`

Le composant SlideApport se trouve dans le fichier `card-slide_apport.tsx`.

Le composant `SlideApport` est utilisé dans le composant `BoxProjectList`, qui est situé dans le fichier `box-project-alluserlist.tsx` et est appelé dans le fichier `alluserlist.tsx` à la ligne 199 dans une boucle `map`.

```tsx
{results
	.filter(results_projets => results_projets.type.includes("group--federage"))
	.map((filterNode) => (
		<div key={filterNode.id}>
			<BoxProjectList key={filterNode.id} node={filterNode} useringroup={useringroup} status={status} />
		</div>
))}
```

Le results qui est une constante qui contient les données de l'API du default_index qui est crée dans le composant `alluserlist.tsx` à la ligne 265.

```tsx
const results = await getSearchIndexFromContext<JsonApiSearchApiResponse>(
	"default_index",
	context,
	{
		deserialize: false,
		params,
	}
)
```

et qui à comme paramètre :

```tsx
const params = {
	fields: {
		"group--federage": "label,field_description",
		"user--user": "name,display_name,field_nom_affiche,field_description,field_type_de_structure,user_picture",
	},
	filter: {

	},

	include: "",
}
```

Le composant `BoxProjectList` prends commme paramètre un `node, useringroup et un status`.

```tsx
<BoxProjectList key={filterNode.id} node={filterNode} useringroup={useringroup} status={status} />
```

```tsx
const { data: useringroup, error: useringroupError } = useSWR(() => `https://fed.septembre.io/explorer-user-in-group`, fetcher)
```

le `useringroup` qui correspond a un apelle d'API qui permet de récupérer l'image d'un membre d'un groupe de projet,
qui est utilisé dans le `composant BoxProjectList` à la ligne 42-60 si l'utilisateur est connecté, puis de la ligne 130-148 si l'utilisateur n'est pas connecté.

```tsx
{useringroup &&
	useringroup
		.filter((userin) => userin.uuid.includes(node.id))
		.slice(0, 5)
		.map((filterUser, index) => (
			<div key={filterUser.id} className={`relative ${index != 0 ? '-ml-2' : ''}`}>
				{filterUser.user_picture && (
					<Link href={`/group/federage/${filterUser.label.replace(/è/g, 'e').replaceAll(' ', '-').replaceAll('\/', '-')}`} passHref>
						<Image
							src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${filterUser.user_picture}`}
							alt={filterUser.uid}
							width={30}
							height={30}
							className="h-8 w-8 rounded-full"
						/>
					</Link>
				)}
			</div>
		))}
```

Le Composant `CalculApport` qui permet d'avoir le nombre de contribution d'un projet et le nombre de contributeur d'un projet.
Il est utilisé dans le composant `BoxProjectList` à la l.86 et l.174

```tsx
<CalculApport key={node.id} node={node} />
```

Le composant `CalculApport` prends comme paramètre un `node` et une `key`.
la clef correspond à l'identifiant du projet.

Le composant `SlideApport` qui est appelé dans le composant `BoxProjectList` à la ligne 108 et 196.
```tsx
{showMenu && <SlideApport showMenu={showMenu} node={node} />}
```

le composant prend 2 paramètre, showMenu et node,
showMenu correspond a un boolean qui est initialisé dans BoxProjectList :

```tsx
const [showMenu, setShowMenu] = React.useState<boolean>(false)
```

Le composant `SlideApport` contient un fetcher :

```tsx
const fetcher = (url) => fetch(url).then((r) => r.json());
```

et un call d'API qui permet de récupérer les apports d'un projet:

```tsx
const { data: userApport, error: userApportError } = useSWR(() => `https://fed.septembre.io/jsonapi/group_content/federage-group_node-financement` + '/' + node.id, fetcher)
```

Le node.id correspond à l'identifiant du projet.

Les données de L'API sont utiliser à la ligne 40 jusqu'a la ligne 58.

Le filtre est appliqué sur le gid d'id du type de groupe puis le mapping qui s'applique pour afficher les données.

```tsx
{!userApport?.length ? (
	<p>
		Aucun résultat.
	</p>
) : (
	<div>
		{userApport?.data
			.filter((userInApport) => userInApport.relationships?.gid?.data?.id.includes(node.id))
			.map((userInApport) => (
				<div key={userInApport.id}>
					{userInApport}
					<div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
						Prix recherché : 40 000,00€
					</div>
				</div>
			))
		}
	</div>
)}
```