var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " I want to dedicate this text to my wonderful wife, Kim, whose sacrifices and support have always made my professional goals possible. She was willing to limit her own professional ambitions to accommodate my needs. Thank you and I love you!  I also want to thank my kids, Noah, Ellen, and Sarah, for being my inspiration in the teaching and learning of mathematics. For two of them, I had the pleasure of actually being their professor and they have given me insights into how students learn mathematics. They all have been supportive of my professional life. I love you all!  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " This book is an application of research I have conducted on the teaching and learning of linear algebra with my colleagues and friends, the late Dr. Melvin Nyman from Alma College, and Dr. John Berry of the University of Plymouth in the UK. As we conducted research together on students in linear algebra classes, I so valued our stimulating conversations and genuine friendship. I could not have created this text without the insights they shared as we analyzed our data and crafted our journal articles. As Mel was only a few miles away from Central Michigan University, I truly miss my frequent visits to his campus. While Mel is no longer with us, his influence on my thinking and teaching are still an ever present reminder of a great friend and mathematician. While John is still active in working to inspire the mathematically talented youth of the UK, I do miss the opportunity to engage with him for the sake of my own professional development. His ideas always prompted deeper understanding for me and I cherish our work together.  I would also like to thank my friend and colleague, Dr. Tibor Marcinek, for his wise counsel and contributions to the text. Tibor was especially helpful in contributing GeoGebra sketches to the activities and helping me better design my earlier versions of my dynamic sketches.  "
},
{
  "id": "sec11-model-moving-worlds",
  "level": "1",
  "url": "sec11-model-moving-worlds.html",
  "type": "Section",
  "number": "1.1",
  "title": "Modeling Data and Moving Between Worlds",
  "body": " Modeling Data and Moving Between Worlds   In this section we will look at linear algebra as a way to encode information and operate on it allowing us to move between different sets of information. To this end, we will define how matrices and vectors are operated on with binary operations like addition and multiplication. While multiplication of matrices may seem weird at first, you will see that it is defined as it is for convenience in manipulating data and transforming different types of values into other computed values based on them. We begin by considering a case where we want to move between a pricing scheme and the revenue it generates for three different companies with three different sets of orders of our products.  To accomplish this, we will use constructs created to deal with objects that contain multiple entries. In the scenario we are using where companies place orders for products, we want to encode the numerical values for the orders organizing them according to the product and company placing the order. Here just want to reduce the information to an array of values and so we define a matrix as an array of values (or objects) consisting of rows and columns. We typically contain these values with brackets or parentheses like: In the matrices above, the columns could represent the numbers of each of four products being ordered and the rows could represent the three different companies placing the orders (see the table of orders for this situation given in ).  We also define a vector as matrix with a single column such as or . Note that we are using boldface to denote the names of the vectors for convenience to distinguish them from numerical objects that we call scalars . In a text like this, using boldface makes sense in print, but typically, in written work, we use a harpoon over the name since boldface is not practical with a pen. In this case, we would write the names as or respectively.  You may have encountered vectors before in geometry or physics. We will go into greater detail later with respect to the geometric interpretation, but for now, the behavior remains the same in that operations still work as they do in geometry and physics. Essentially, vectors consist of components so that when the vectors are added, we simply add the components.     If and are vectors, we define vector addition as adding the vectors component by component. Note that the vectors must be of the same dimension.      For example, suppose we have the two vectors in , . Adding these would result in .  The other basic operation we can do with vectors is to scale them (geometrically make them longer or shorter or in the case of negative values, make them go in the opposite direction). For this reason, when we multiply the vector by a numerical value, we call that value a scalar . For example, In essence, we scaled the vector by a factor of 2.     In general, we can define scalar multiplication of a vector as where .     Combining scalar multiplication with vector addition, we get We can use these linear combinations applying them to our previous scenario for moving between price of materials and the revenue they generate.    Working with Vectors   As we begin to work with vectors, we should examine how basic operations with them work both numberically and geometrically. Here we will first look at vector addition and then scalar multiplication.     In , we defined an addition for vectors based on component-wise addition. Consider the vectors in , and . Numerically add these two vectors in two ways, first and then . Give your result in each case and describe what you notice.      On the grid in , plot both and as directed line segments (i.e. arrows). Also plot the results you obtained for and . In your groups, discuss how you might interpret movement from the origin along and to arrive at the location of and . How is the interpretation of movement different depending on whether you are using or ? Sketch the directed movement as a combination of two vectors (arrows) for each case.    Grid for Vector Addition   Grid for Adding Vectors         In , we defined scalar multiplication for vectors based on component-wise multiplication by the same scalar (number). Consider the vector in , . Numerically multiply this vector by the scalars , , and . Give your result in each case.      On the grid in , plot and as directed line segments (i.e. arrows) for each value of . Describe what you notice about all of these results.   Grid for Vector Addition   Grid for Adding Vectors            Linear Combinations and Dealing with Data  Continuing our scenario from the introduction. Suppose that a supplier provides four different products with prices, , to three companies. One thing we may want to do is to play with pricing schemes and look at the generated revenue we would get from each of the three companies. Suppose we have orders from the three companies for each of our four products as given in the table below.    Product Orders    Clients  Product 1  Product 2  Product 3  Product 4    Company 1  14  9  34  41    Company 2  32  7  12  52    Company 3  21  8  5  23        Prices, Vectors, and Revenue   Consider the scenario given above for the orders by three companies for four different products.     Thinking of the four Products from as each being a vector where the entries of the vector store the orders made for each of the three companies, express this information as a set of four vectors in .    Since there are four Products , we can express the orders from the three companies for each Product as an ordered triple (or vector) containing three entries (one for each company) for that product. This would give us a set of four vectors:       If Product 1 is priced at $12, Product 2 is priced at $9, Product 3 is priced at $15, and Product 4 is priced at $7, using these prices for each of the four Products in the table as scalars, write a linear combination of the vectors from your set from part (a) that when added will give a vector in that represents the revenue generated from each company. How much did you collect from each company? Feel free to use your CAS to do the computation here.     This means we received $1046 from Company 1, $991 from Company 2, and $560 from Company 3.      Since you allowed your CAS to do the computation for part (b), let's think about how it is doing the arithmetic. Using what we have defined for combining scalar multiplication and vector addition in Equation 1.1.2, show the details of how the CAS was computing the resulting vector that you obtained in part (b).              In general, we can think of the selling price for each of the four Products as scalars . Give a general expression in terms of for the revenue generated by the purchases for the three companies expressing them as a linear combination of three-entry revenue vectors (one entry for each company) resulting in the revenue vector, .           Notice that where the product and sum are combined in part (c) we have the scalar values (or prices) of each Product ($12, $9, $15, and $7) being multipled by all entries in their respective vectors where the number of orders of each Product is placed in the vector in order by the company. When these vectors are then added, we get the total revenue for each company organized as an ordered triple (since there are three companies).  Here we are purposefully using an example where the number of entries in each set of values of interest (prices and revenue) are different to highlight that although we can have the same number of entries in each set be the same, it is not necessary. Eventually we will express the prices as a vector consisting of four entries and the revenue as a vector consisting of three entries where we can think of the process of going from prices to revenue as a transformation between worlds so to speak. In this case we will have four entries in one set of vectors\/world (prices of different Products) meaning that these vectors exist in such as and three entries in the other set of vectors\/world (revenue from each of the three companies) existing in like .  In the previous activity, you may have noticed behaviors of the arithmetic when working with the vectors and scalars that are familiar. From your basic experiences in elementary school, you will recall some properties for operating on numbers that seem to also be happening in your work with vectors. Let's explore these briefly by using the properties of vector addition and scalar multiplication we have just defined.    Structure of Vectors   Consider the vectors , , and . Define each of these vectors in your computer algebra system (CAS).     Based on what we know about how we have defined vector addition and the fact that all of these vectors are in , when we add any two of them we will get another vector in . However, what other properties hold? Using your CAS, compute and then compute . Describe what you notice? Have you seen this behavior before with real numbers? What is this property called?      Using your CAS, compute , first by computing and then adding to your result. Now compute , first by computing and then adding your result to . Describe what you notice? Have you seen this behavior before with real numbers? What is this property called?      Using each of the vectors, , , and , add the vector to each. Describe what you notice. Have you seen this behavior before with real numbers? What is this property called?      Using each of the vectors, , , and , negate each entry of and add the resulting vector to . Describe what you notice. Repeat this process with and . Do you get similar results? Have you seen this behavior before with real numbers? What is this property called?      Using your CAS, compute , first by computing and then multiplying 2 times your result. Now compute , first by computing 2 times each vector and then adding your results together. Describe what you notice? Have you seen this behavior before with real numbers? What is this property called?      Given that , compute and . Describe what you notice? Have you seen this behavior before with real numbers? What is this property called?      Using your CAS, compute , first by computing and then multiplying 2 times your result. Now compute , first by computing 2 times 3 and then multiplying your result by . Describe what you notice? Have you seen this behavior before with real numbers? What is this property called?      Since we have seen these properties before from our work with real numbers, we can use them with vectors and scalars so that we can manipulate these combinations of operations. To this end, we can define a \"world\" where objects like vectors and scalars behave in a way that we expect and can use.    Vector Space   A vector space is a nonempty set of objects, called vectors , on which are defined two operations, called addition and scalar multiplication (for real numbers), that satisfy the following axioms. For any and :                  There exists a zero vector , denoted , such that .    For each , there exists a vector denoted such that .    The scalar multiple of by , denoted .                              Transforming Data and Matrix Multiplication  As we have seen, we can use vectors to represent any entity that might have multiple components. This allows us to manipulate values of common components by adding or multiplying them while keeping the components separated in the process. This use of linear combinations of vectors is useful, but the real desire of the previous scenario is to examine how manipulating one set of values (say, prices of products) affects another set of values (revenue from each company). Just as we explored functional relationships in algebra and calculus, we also might want to explore functional relationships with objects that have not just one value as an input and one corresponding value as an output, but rather inputs that have many component values and a corresponding output that also has many component values.  Recall that one of our first experiences with functions dealt with simple linear relationships. For example, Hooke's Law states that there is a simple linear relationship between force on a stretched or compressed spring and the distance of the associated stretch or compression, , where is a constant of proportionality. If we use function notation to express that force, , is a function of stretch, , we indicate the independent variable by placing it in parentheses getting, .  In this situation, we obtain the force as an output by multiplying the stretch, , by a numerical value, . What if in our scenario for the relationship between pricing of products and the revenue generated from each of our three companies, we could have a simple multiplication by something that acted like in our Hooke's Law relationship? In the case, there is a single value, , that affects the output, , for a given input, . However, in the situation with price vs revenue, there are many values impacting the output of revenue for an input vector of prices (namely, all of the different order values provided by the companies placing orders). So, our k -equivalent must take into account all of the values of the orders placed by the companies. Here we can think of our single multiplier (like that of ) as being comprised of an array of order values for the products like we had for the linear combination of the vectors except now we express this set of vectors as a single matrix where each column is a vector (called a column vector ). This gives an entity (matrix) that serves the role that did in .  What this does for us is it allows us to think of the scalars (prices) we used in the linear combination, as an input vector, , so that we get a relationship that is structurally similar to : where acts like , acts like , and acts like .  The use of a matrix as a single entity that we can use to multiply by a vector brings an interesting question. What does it mean to multiply by a matrix? If we look at what we want to do from our functional perspective in the case above, we would like to have the outputs represent the revenue in the way we ultimately added them up in the linear combination of the vectors with the prices viewed as scalars for the column vectors in the matrix. This means that we will need to define the multiplication of a matrix and a vector in such a way that we get:  Now this may seem complicated, but one way to look at the process is that we proceed across a row in the matrix while moving down the vector component by component adding the products of the row entries of the matrix and the corresponding component entries of the vector. For example, for the top entry in the resulting revenue vector, we obtained it by moving across the first row with values 14, 9, 34, and 41, while multiplying each by their respective position price value , , , and and then adding these four products together. This gives . Now we proceed similarly for each row moving across the row and down the vector creating product combinations and adding them together as we go. The row of the matrix we use for the computation becomes the row position in the resulting vector we are creating (in this case, revenue). You will likely notice that the result of the way we have chosen to define the multiplication of a matrix and a vector only makes sense if the number of columns of the matrix matches the number of entries (rows of components) of the vector.    Transformations of Vectors  Now that we have defined what it means to multiply a matrix and a vector, we can go back to the concept that motivated it, namely, the desire to move between an input vector and an output vector. In a way, we are looking to transform one type of vector into another type of vector. When we think of our example of Hooke's Law as transforming stretch or compression into force, we note that this happens in our daily lives and we are not often even aware it is there.  Consider a trip to the grocery store. In the produce aisle, we take zucchini and place them on a scale. In turn, the scale returns a weight (force) in pounds (if you are in the USA) or mass in kilograms (practically anywhere else in the world). Inside the scale, there is a spring that is being compressed or stretched. This value is then transformed into a value of weight or mass using Hooke's Law. In fact, it is more likely the case that you are more familiar with a transformation in form of cost instead of weight or mass as most digital scales today allow us to scan the scale's output barcode registering a cost in our \"shop and scan\" app. Below is a video illustrating this process.     The Produce Aisle: Concept of Linear Transformation    So what are the characteristics of this type of transformation? Consider the case from the video where we saw that the doubling the force (or mass) corresponded in the doubling of the stretch. Similarly, tripling the force would triple the stretch. In general, this means that any multiple of stretch will correspond to the same multiple of force (or mass or cost) depending on the output we desire for the transformation. We can see this from the basic algebra from Hooke's Law. What this says is that scalar multiplication is preserved .  Now this is all well and good if we are looking at replicating the same stretch multiple times (e.g. all of our zucchini are the exact same weight), but what about the case where we have multiple numbers of zucchini of varying weight (corresponding to varying stretches)? We also want to have it be the case that if we place two different \"stretch\" zucchinis on the scale that the resulting weight will simply be added together as well so that their corresponding costs will also be added together (since we are paying based on the cost\/unit weight). In this case, suppose we have two possibly different stretches , and . Here we get What this says is that vector addition is preserved . In this case, we can think of the inputs, and , as vectors with only one component. In fact, if you have ever taken a physics class, you will recall that both force and stretch in Hook'e Law were considered vectors since along a single line we associate a positive and negative direction for these values to indicate direction of the force or stretch. We often represent this relationship as a vector relationship, or .  Recall from your Algebra 1 days, a function like is the most basic of linear functions. Therefore, it should come as no surprise that these two aspects of behavior (preservation of scalar multiplication and vector addition) by this type of function are the defining properties of what we call linear transformations .     In the case of the force and spring stretch, we had a spring constant, , as our constant of proportionality where it was a single value that worked for a specific spring. As we have seen, we may have relationships where this \"constant\" is actually dependent on many different values instead of a single one (i.e. a matrix of values). Can we still have these two operations (scalar multiplication and vector addition) work when the thing we are multiplying the vectors by is a matrix? Suppose we have a matrix transformation given by . Define this transformation in your CAS and then define and .    Defining Transformation on TI-Nspire CX II CAS   Defining on TI-Nspire CX II CAS        Compute and and add them.      Compute and . Describe your observations relative to your responses from part(a).      Compute and . Describe your observations.      To see if your observations will hold in general for this particular matrix, create two vectors on your CAS , and . Using your CAS, find expressions for and . Does your earlier observation hold for any two vectors in ? Explain.      Using, , to represent any real number, find expressions for and . Does your observation from part (c) hold for all vectors in ? Explain.      Given how we defined matrix-vector multiplication out of linear combiinations, come up with an argument for why all such matrix transformations must be  preserving both scalar multiplication and vector addition.        Linear Transformation   Suppose is a mapping between and , ( and need not be distinct) such that both scalar multiplication and vector addition are preserved.  where , and is a scalar. Then the mapping is called linear or a linear transformation .     Just as the relationship of Hooke's Law can be thought of as transforming stretch into force , in our scenario between pricing structures and the revenue generated, we are similarly looking to transform a pricing scheme into the resulting revenue for our three companies. We can even use function notation to represent this relationship. If we let the vector , we can think of the product of the matrix of orders by the companies and the vector as a revenue transformation (or function), , given by This is effectively a mapping between vectors in and vectors in . We can represent this mapping as .    Price to Revenue: Linear Transformation?   In the previous activity, we illustrated how we can show that a matrix transformation between the same spaces ( to ) is, in fact, a linear transformation. In this activity, let's take a similar approach to show we can also make the same claim for mappings between different spaces ( to ). Here we will use our earlier example of transforming price scenarios into revenues for our three companies.     Consider the transformation , where . Find expressions for and . Is scalar multiplication preserved for all vectors in ? Explain.      To see if preservation of vector addition holds in general for this particular matrix, create two vectors on your CAS , and . Using your CAS, find expressions for and . Is vector addition preserved for any two vectors in ? Explain.         If is a linear transformation, then it must map the zero vector from the domain to the zero vector in the range. In other words, .    Suppose is a linear transformation and . Well since , we know that where here is in . Since vector addition is preserved, we get that this is equal to . Again, as a linear transformation, we know that scalar multiplication is also preserved and so and thus where here is in .     We began this section looking at how we can represent practical data and relationships using matrices and vectors along with operations allowing us to transform one type of vector into another. In the next few sections, we will extend this view to consider geometric representations that have far reaching applications into areas such as digital file compression and image detection. Eveytime you access your phone using facial recognition, you are using linear algebra. Vectors and matrices play a key role in your everyday life and you may not even be aware of it!   "
},
{
  "id": "def-vector-add",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#def-vector-add",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  If and are vectors, we define vector addition as adding the vectors component by component. Note that the vectors must be of the same dimension.    "
},
{
  "id": "def-scalar-mult",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#def-scalar-mult",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  In general, we can define scalar multiplication of a vector as where .   "
},
{
  "id": "act-basic-vector-operations",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#act-basic-vector-operations",
  "type": "Activity",
  "number": "1.1.1",
  "title": "Working with Vectors.",
  "body": " Working with Vectors   As we begin to work with vectors, we should examine how basic operations with them work both numberically and geometrically. Here we will first look at vector addition and then scalar multiplication.     In , we defined an addition for vectors based on component-wise addition. Consider the vectors in , and . Numerically add these two vectors in two ways, first and then . Give your result in each case and describe what you notice.      On the grid in , plot both and as directed line segments (i.e. arrows). Also plot the results you obtained for and . In your groups, discuss how you might interpret movement from the origin along and to arrive at the location of and . How is the interpretation of movement different depending on whether you are using or ? Sketch the directed movement as a combination of two vectors (arrows) for each case.    Grid for Vector Addition   Grid for Adding Vectors         In , we defined scalar multiplication for vectors based on component-wise multiplication by the same scalar (number). Consider the vector in , . Numerically multiply this vector by the scalars , , and . Give your result in each case.      On the grid in , plot and as directed line segments (i.e. arrows) for each value of . Describe what you notice about all of these results.   Grid for Vector Addition   Grid for Adding Vectors        "
},
{
  "id": "product-orders",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#product-orders",
  "type": "Table",
  "number": "1.1.5",
  "title": "Product Orders",
  "body": " Product Orders    Clients  Product 1  Product 2  Product 3  Product 4    Company 1  14  9  34  41    Company 2  32  7  12  52    Company 3  21  8  5  23    "
},
{
  "id": "sec-Linear-Comb-Data-4",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#sec-Linear-Comb-Data-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Products Products Product Products "
},
{
  "id": "sec-Linear-Comb-Data-5",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#sec-Linear-Comb-Data-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Product Product "
},
{
  "id": "sec-Linear-Comb-Data-8-1",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#sec-Linear-Comb-Data-8-1",
  "type": "Activity",
  "number": "1.1.3",
  "title": "Structure of Vectors.",
  "body": " Structure of Vectors   Consider the vectors , , and . Define each of these vectors in your computer algebra system (CAS).     Based on what we know about how we have defined vector addition and the fact that all of these vectors are in , when we add any two of them we will get another vector in . However, what other properties hold? Using your CAS, compute and then compute . Describe what you notice? Have you seen this behavior before with real numbers? What is this property called?      Using your CAS, compute , first by computing and then adding to your result. Now compute , first by computing and then adding your result to . Describe what you notice? Have you seen this behavior before with real numbers? What is this property called?      Using each of the vectors, , , and , add the vector to each. Describe what you notice. Have you seen this behavior before with real numbers? What is this property called?      Using each of the vectors, , , and , negate each entry of and add the resulting vector to . Describe what you notice. Repeat this process with and . Do you get similar results? Have you seen this behavior before with real numbers? What is this property called?      Using your CAS, compute , first by computing and then multiplying 2 times your result. Now compute , first by computing 2 times each vector and then adding your results together. Describe what you notice? Have you seen this behavior before with real numbers? What is this property called?      Given that , compute and . Describe what you notice? Have you seen this behavior before with real numbers? What is this property called?      Using your CAS, compute , first by computing and then multiplying 2 times your result. Now compute , first by computing 2 times 3 and then multiplying your result by . Describe what you notice? Have you seen this behavior before with real numbers? What is this property called?    "
},
{
  "id": "sec-Linear-Comb-Data-10",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#sec-Linear-Comb-Data-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector space "
},
{
  "id": "linear-transformation-video",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#linear-transformation-video",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": "  The Produce Aisle: Concept of Linear Transformation  "
},
{
  "id": "sec-Transformations-Vectors-8-1",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#sec-Transformations-Vectors-8-1",
  "type": "Activity",
  "number": "1.1.4",
  "title": "",
  "body": "  In the case of the force and spring stretch, we had a spring constant, , as our constant of proportionality where it was a single value that worked for a specific spring. As we have seen, we may have relationships where this \"constant\" is actually dependent on many different values instead of a single one (i.e. a matrix of values). Can we still have these two operations (scalar multiplication and vector addition) work when the thing we are multiplying the vectors by is a matrix? Suppose we have a matrix transformation given by . Define this transformation in your CAS and then define and .    Defining Transformation on TI-Nspire CX II CAS   Defining on TI-Nspire CX II CAS        Compute and and add them.      Compute and . Describe your observations relative to your responses from part(a).      Compute and . Describe your observations.      To see if your observations will hold in general for this particular matrix, create two vectors on your CAS , and . Using your CAS, find expressions for and . Does your earlier observation hold for any two vectors in ? Explain.      Using, , to represent any real number, find expressions for and . Does your observation from part (c) hold for all vectors in ? Explain.      Given how we defined matrix-vector multiplication out of linear combiinations, come up with an argument for why all such matrix transformations must be  preserving both scalar multiplication and vector addition.    "
},
{
  "id": "sec-Transformations-Vectors-9",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#sec-Transformations-Vectors-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear linear transformation "
},
{
  "id": "sec-Transformations-Vectors-11-1",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#sec-Transformations-Vectors-11-1",
  "type": "Activity",
  "number": "1.1.5",
  "title": "Price to Revenue: Linear Transformation?",
  "body": " Price to Revenue: Linear Transformation?   In the previous activity, we illustrated how we can show that a matrix transformation between the same spaces ( to ) is, in fact, a linear transformation. In this activity, let's take a similar approach to show we can also make the same claim for mappings between different spaces ( to ). Here we will use our earlier example of transforming price scenarios into revenues for our three companies.     Consider the transformation , where . Find expressions for and . Is scalar multiplication preserved for all vectors in ? Explain.      To see if preservation of vector addition holds in general for this particular matrix, create two vectors on your CAS , and . Using your CAS, find expressions for and . Is vector addition preserved for any two vectors in ? Explain.    "
},
{
  "id": "lem-zero-vector-map",
  "level": "2",
  "url": "sec11-model-moving-worlds.html#lem-zero-vector-map",
  "type": "Lemma",
  "number": "1.1.10",
  "title": "",
  "body": "  If is a linear transformation, then it must map the zero vector from the domain to the zero vector in the range. In other words, .    Suppose is a linear transformation and . Well since , we know that where here is in . Since vector addition is preserved, we get that this is equal to . Again, as a linear transformation, we know that scalar multiplication is also preserved and so and thus where here is in .   "
},
{
  "id": "sec12-global-local-coords",
  "level": "1",
  "url": "sec12-global-local-coords.html",
  "type": "Section",
  "number": "1.2",
  "title": "Global vs Local Coordinates",
  "body": " Global vs Local Coordinates   In this section we will look at how we can describe locations from within a small region around us and within the a larger space where our small world might exist. Believe it or not, we use this idea on a daily basis. If you have ever written a paper that included images, your computer used \"small-world\" locations and placed them within a \"larger-world\" context. Consider the image below of a local image and a page of text where this image has been placed (a global coordinate system).     Graphical 3D System (Locally Defined)   Graphical Image of 3D System     3D System on the Page   Image on a Page      Imagine that I am wanting to write a book (which I am) and wish to have a figure imbedded within the text that is being written. The image is created as a series of pixels that are defined by specific colors in an array within a “local” environment where the pixels represent coordinates (or points) for each part of the image. The image is then inserted into a much wider defined document with its own set of coordinates. The placement of the image means that the old coordinates must be converted (or transformed) into the new coordinates that exist within the larger image (i.e. the page). We can even wrap text around the image if we are feeling fancy. In addition, we may also want to scale the image up or down to fit a particular format for the page. This means that the original coordinates for the image must be transformed again. So how can we use mathematics to accomplish these transformations?   "
},
{
  "id": "fig-3d-system-local",
  "level": "2",
  "url": "sec12-global-local-coords.html#fig-3d-system-local",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Graphical 3D System (Locally Defined)   Graphical Image of 3D System   "
},
{
  "id": "fig-3d-system-on-page",
  "level": "2",
  "url": "sec12-global-local-coords.html#fig-3d-system-on-page",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " 3D System on the Page   Image on a Page   "
},
{
  "id": "sec21-linearcomb-reaching-space",
  "level": "1",
  "url": "sec21-linearcomb-reaching-space.html",
  "type": "Section",
  "number": "2.1",
  "title": "Linear Combinations and Reaching in Space",
  "body": " Linear Combinations and Reaching in Space   In this section we will look at how a space can be described by many different types of of coordinates and coordinate systems. As students, our first introduction to locating a point in the plane, , is by imagining a square grid and expressing the location of a point as a pairing of two coordinates, . As I was staring at the ceiling while visiting Caveland Lodge in Carter Caves State Park located in Olive Hill, KY, I was reminded of the story of the mathematician and philosopher, Rene Descartes. As the story goes, the mathematician, Descartes, was watching a fly walking on the ceiling. He wondered how he might describe the position of the fly and decided that he could measure the distance from the corner of the ceiling in one direction and then the distance along a perpendicular direction to uniquely locate the fly (much like the grid system you can see in the image of my hotel room ceiling at Carter Caves, ). This was the beginning of the Cartesian (or rectangular) coordinate system. However, this is not the only way we could uniquely locate the fly.     Carter Caves State Park   Descartes Fly     Descartes' Fly   Descartes Fly        Linear Combinations and Spanning     Suppose you are Descartes staring at the fly on the ceiling. At first, all you see is the fly sitting arbitrarily in space (see ). Next, you imagine two vectors defining different directions and acting as units of measure ( ). As your imagination wanders, you begin to see two sets of parallel lines crisscrossing the ceiling ( ).      Fly on Ceiling      Fly and Vectors      Fly and Grid         If the vectors, and , represent the units of measure in their respective directions, and where these two vectors both begin is the origin of your grid system, what would be the coordinates of the fly in the coordinate system?      Draw a vector from the origin (where and meet) to the fly. Describe this new resultant vector as a linear combination of the vectors and .      At this point you blink your eyes and imagine a new pair of vectors acting as your measuring devices. This time they are the standard unit vectors you are used to seeing from the Cartesian plane, namely, and . Based on the grid system you see in , what are the coordinates of the fly's location?      Fly on Ceiling      Fly and Grid      Fly and Both Grids          Draw a vector from the origin (where and meet) to the fly. Describe this new resultant vector as a linear combination of the vectors and .      Looking at both grids superimposed on each other ( ), explain why your responses to parts (a) and (c) make sense.      Looking at the scalars from the linear combination of vectors you found in parts (b) and (d), what connections do you see to the grid systems being used in each case?      As we have just seen, there are several (in fact, infinitely many) ways we could grid the space to describe a way to get to a location in . We happened to be using two vectors in each case in the previous activity, one with and , and the other with vectors from our more familiar \"standard\" two vectors, and . However, could we go with fewer vectors? What about using more than two? Let's consider what might happen in either of these cases.    Linear Combinations and Spanning   As we have seen by the operations we have defined for vectors, we can create new vectors using combinations of scalar multiplication and addition of existing vectors. In this lab you will explore both the algebraic and geometric combination of such vectors and develop an intuition for how algebraic operations relate to geometric representations of the same ideas.    Linear Combinations     Instructions   This interactive construction provides, initially, two vectors displayed head-to-toe representing a linear combination. The numerical entries for each vector can be changed by simply editing their respective values in the fields provided. For example, to change vector , edit the values for and . In addition, there are sliders provided for the scalars associated with the vectors. Manipulating the vectors and scalars allows you to create various linear combinations using the displayed vectors. Later in the project, you will be asked to use three vectors instead of two. To add the third vector, simply click the \"three vectors\" checkbox.                   Consider the two vectors and . On page 1.1 of the TI-Nspire document, LinearComb.tns, these vectors have been defined for you. On page 1.2, you will see two sliders representing scalars ( and ) along with the geometric representation of the linear combination of these vectors using the scalar values (i.e. ).  You may instead use the applet in where the components of the vectors can be entered directly into the fields labeled , , , and and the scalars are given by the sliders and above.    Part 1 Subquestions    On page 1.2, adjust the sliders to find scalars and so that the linear combination of the vectors and will be the same as the vector . Record the values of the scalars you find giving a rough sketch of your linear combination.    Don't worry if your decimal answers are a little off here. It should, however, be in the ballpark.      On page 1.1, perform the computation for the values of and that you found and discuss what you notice relative to your experience on the graphing page.    Again, don't worry if your decimal answers are a little off here. It should, however, be in the ballpark.      Is it possible to find a different pair of values and that will also result in the linear combination being equal to the vector ? If so, what values for and did you find? If not, explain why it was not possible.      Now grab the point on page 1.2 representing the vector and move it to another location in the plane. Find a new set of scalars and so that the linear combination of the vectors, , will be the same as your new vector. Record the new vector you choose along with the scalars and that work for the linear combination giving a rough sketch of your linear combination.      Repeat part (d) for at least two more vectors recording your new vectors and the scalars and that work for the linear combination giving a rough sketch of your linear combinations.      If we start with a certain set of fixed vectors and look at all of the vectors we can get (or reach) with just linear combinations of these vectors ( ), it is like asking what objects can we grab with our arms? Thus we call the set of all vectors that we can reach with linear combinations of a certain set of vectors the Span of those vectors (analogous to our “arm span”). In this case we would denote the set of all vectors that we can obtain from linear combinations of and by .         Choose two new vectors to use for vectors and redefining them on page 1.1 (be careful to choose entries that will allow the vectors to fit into the graphing window). While on page 1.1, you can choose menu option followed by to redefine the vectors. To enter the desired new vectors, use the math palette and select the vector option (see below).  If using , simply edit the entries in the fields for the vector components to redefine the vectors and .            Part 2 Subquestions    Repeat what you did in question 1(d) recording the third vector and the scalars and that work for the linear combination giving a rough sketch of your linear combination.      Now place your target vector back to and redefine the vector . Now try to define another vector for so that it is not possible to reach the vector with any linear combination of vectors and . What do you notice about the geometric relationship between and ?      Based on your experiences, given any two vectors in , can you always find a linear combination of them that will give you any vector in you might desire? Explain your observations.      At this point we have examined linear combinations of two vectors to get another vector in . What if we used linear combinations of three vectors? For the next part of the lab, consider three original vectors , , and using linear combination to obtain a fourth vector as you did in the first two questions.        If using the TI-Nspire, on page 2.1 of the document, you can see three vectors , , and defined. This part of the project will use three vectors instead of two.  If you are using the built-in applet ( ), simply click the checkbox to show the third vector.            Part 3 Subquestions    If using the TI-Nspire, go to page 2.2 and adjust the scalars , , and so that you get vector as a linear combination of vectors , , and .  If using , move the resultant vector to and adjust the scalars , , and so that you get vector as a linear combination of vectors , , and .  Record your values for , , and giving a rough sketch of your linear combination.      Can you find a different set of scalars , , and so that you also get vector as a linear combination of vectors , , and ? If so, record your different set of values for , , and that work giving a rough sketch of your linear combination. If not, explain why it can't happen.      Compare\/contrast the “uniqueness” of the linear combination in the case of three vectors to what you found in question 1(c) for two vectors.             Based on what you found in question 3, is it possible to replace the three-vector situation with a unique linear combination of two vectors? To help answer this question, try leaving alone and finding a unique second vector that could be used instead of so that when added to would give the vector . Give a rough sketch of your linear combination.          Based on your observations, what do you think would be the minimum number of vectors needed so that you could reach any desired vectors in as a linear combination of the vectors? What relationship must there be among these vectors so that any vector in can be obtained as a linear combination of them?       Linear Independence  As we saw in , we had a few different situations that could occur in dealing with vectors in . If we only have one vector, it is easily seen that we can only move along a single line containing that vector by use of scalar multiples of it. If we have exactly two vectors, we can have a couple of scenarios. The first happens when the two vectors are just scalar multiples of each other. In this case, adding them together in any linear combination will simply result in staying on the same line, and thus, we cannot move into other parts of the plane. We can't get off the line. The second scenario is if we have two vectors that are not scalar multiples of each other. In this case, using scalar multiples of one of them allows us to move along an infinite line and when adding a scalar multiple of the other vector, we can veer off that course into other regions of the plane. In fact, to span all of , we need to have at least two vectors that are not scalar multiples of each other.  The last scenario is when we had more than two vectors in . Recall that in this case, we could replace some of these vectors with a single vector representing their sum and thus \"reduce\" the number of vectors we needed to span the same space. To see how this works algebraically, let's explore it with some actual vectors.     Based on , we noticed that if we are in , if we want to span the entire space, we need to have at least two vectors. However, it was not enough to have two vectors, but in addition, these two vectors could not be on the same line. Here we will explore this idea in greater detail. Consider the set of vectors in given by .     Do we need all three of these vectors to reach all of ? If so, explain why. If not, explain why not.      Consider the linear combination of these vectors given by . Express the vector as a scalar multiple of .      Now replace the part of your linear combination, , with its equivalent expression in terms of . Based on your experience working with polynomials in high school, \"factor out\" the vector from the last two terms of your linear combination. What is the new scalar you get for ?      Now you can take your original linear combination in three vectors given by and replace it with a linear combination of only two vectors, namely and . What is this linear combination?      Using your CAS, evaluate both and your new linear combination from part (d) to show they are the same.      In the previous case, we happened to have one vector that was a scalar multiple of another vector, but what happens if none of the three vectors are scalar multiples of another one of the three? Suppose instead, that one of the vectors is a linear combination of the other two? Consider the set of three vectors . Here we do not necessarily have one that is a scalar multiple of another, but let's say that . Since our assumption here is that none of the three vectors is a scalar multiple of any of the remaining ones, we can pick any two vectors and reach any other vector in since they do not fall on the same line and thus will span all of the plane. Therefore, we can assume that one of the three vectors must be a linear combination of the other two. If we want to have a particular linear combination using all three vectors, , we can instead represent this as . This gives . In otherwords, a linear combination using just and , meaning we only need two vectors since one of the three is linearly dependent on the other two. Since we can use this argument for all three vectors, this also confirms your observations from part 3 of that given three vectors where no two share a common line, a linear combination used to reach another vector is not unique.    A set of vectors is linearly dependent if one of the vectors can be expressed as a linear combination of other vectors in the set. Otherwise, the set of vectors is called linearly independent .  Put another way, a set of vectors, , in is linearly independent if the equation has only the trivial solution where all of the . Note that if some of the , then one of those terms could be isolated on one side of the equation and that vector could be shown to be a linear combination of the others.      Now you may have a question about what to do with a set of vectors containing only one nonzero vector? Based on our definition, we can't really say that one of the vectors can be expressed as a linear combination of other vectors (we don't have \"other\" vectors). Therefore, we will consider this situation as falling into the \"otherwise\" category and state that a set of exactly one nonzero vector is a linearly independent set.     A set of two or more vectors, , is linearly dependent if and only if at least one of the vectors in the set is a linear combination of the other vectors in the set.  Caution : This is not saying that all of the vectors in the set must be a linear combination of the others. Just that there exists at least one vector in the set that is a linear combination of the others.        Spanning and Existence of Linear Combinations  As we saw earlier in , we had two main questions to consider. The first was whether or not a vector could be reached using a linear combination of vectors? The second was that, if a vector could be reached, was the linear combination used to get there unique? A caveat to this second question is, if the linear combinations are not unique, how many are there? Are there a finite number of them? Are there an infinite number of them? These are questions that will require us to consider ways of finding the linear combinations (or at least a way to describe or characterize them in the case of an infinite number). To begin, let's first summarize what we have discovered thus far.     The Span of a set of vectors, , , , , is the set of all linear combinations that can be reached by these vectors, and denoted by, .        Let us consider vectors in and whether or not we can reach them? From , if we had exactly 2 vectors that did not fall along the same line, we could reach any vector in . Once we added a third vector, we noticed that there could be more than one way to reach a given vector using linear combinations of the vectors, but how many different ways could we do this? In the earlier exploration, you found several, but we need to consider how many there might be.     Suppose we have vectors given by . Note that none of these vectors fall along a common line. Come up with scalars , , and so that . Discuss your strategies in your groups and be prepared to share with the class.      What would happen if you chose a specific scalar for one of the vectors, say ? Can you find and , so that your linear combination will reach ? If so, what are they? If not, explain why not.    If , then you have . What vector equation do you now have to solve for scalar values?      Now change your specific scalar for one of the vectors, say ? Can you find and , so that your linear combination will reach ? If so, what are they? If not, explain why not.    If , then you have . What vector equation do you now have to solve for scalar values?      If you fix one of the scalars, can you always find scalars for the other two so that you can reach ? Why or why not? Can you argue that there are infinitely many linear combinations to reach ?      In the previous parts of this activity, the target vector was always . Will your responses to the earlier parts change if a different target vector is chosen? Does this set of vectors span ?      In your groups, discuss what would happen if you had more than three vectors. Would you still be able to apply your process to produce a linear combination to give any desired target vector? If so, would there be a finite or infinitely many such linear combinations?      In part 1, we explored situations where, given a linearly independent set of vectors, it appeared that we could find only one set of scalars that would reach a given vector. In contrast, when we had more than the number of vectors needed to span the space, there were infintely many sets of scalars that would allow us to reach a given vector in the span of the set of vectors. Will this always be the case? Consider the following theorem.     Given a linearly independent set of vectors, , and any vector, , then the scalars, , needed to reach are unique.    Suppose we have a linearly independent set of vectors, , and any vector, . Further, suppose we also have , such that . If are not unique, then there exists another set of scalars, , such that . Subtracting these equations, we get . Since are linearly independent, this means that , . In otherwords, the scalars are all equal and thus unique.     So far we have been exploring sets of vectors in . You can imagine how this process becomes more complex as we add higher dimension vectors like vectors from , . shows that it doesn't matter how many dimensions we have for a linearly independent set of vectors, the scalars that yield a specific vector in the span of the vectors is unique. The question this leads us to is how do we more easily find (or generate) the scalars for the linear combinations we desire, be they unique as in the case of linearly independent vectors or infinite in the case of linearly dependent vectors? In the next few sections, we will look at ways we have found these scalars in the past from our high school experience and see how matrices can help us more efficiently find them. In addition, we will look at how matrices can help us categorize sets of vectors as being linearly dependent or linearly independent and which vectors of a set are the necessary ones and which ones we can do without.   "
},
{
  "id": "carter-caves-intro",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#carter-caves-intro",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " Carter Caves State Park   Descartes Fly   "
},
{
  "id": "descartes-fly-intro",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#descartes-fly-intro",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": " Descartes' Fly   Descartes Fly   "
},
{
  "id": "act-descartes-fly",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#act-descartes-fly",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "  Suppose you are Descartes staring at the fly on the ceiling. At first, all you see is the fly sitting arbitrarily in space (see ). Next, you imagine two vectors defining different directions and acting as units of measure ( ). As your imagination wanders, you begin to see two sets of parallel lines crisscrossing the ceiling ( ).      Fly on Ceiling      Fly and Vectors      Fly and Grid         If the vectors, and , represent the units of measure in their respective directions, and where these two vectors both begin is the origin of your grid system, what would be the coordinates of the fly in the coordinate system?      Draw a vector from the origin (where and meet) to the fly. Describe this new resultant vector as a linear combination of the vectors and .      At this point you blink your eyes and imagine a new pair of vectors acting as your measuring devices. This time they are the standard unit vectors you are used to seeing from the Cartesian plane, namely, and . Based on the grid system you see in , what are the coordinates of the fly's location?      Fly on Ceiling      Fly and Grid      Fly and Both Grids          Draw a vector from the origin (where and meet) to the fly. Describe this new resultant vector as a linear combination of the vectors and .      Looking at both grids superimposed on each other ( ), explain why your responses to parts (a) and (c) make sense.      Looking at the scalars from the linear combination of vectors you found in parts (b) and (d), what connections do you see to the grid systems being used in each case?    "
},
{
  "id": "linear-comb-span-4",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#linear-comb-span-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Span "
},
{
  "id": "act-number-vectors-needed-Rn-",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#act-number-vectors-needed-Rn-",
  "type": "Activity",
  "number": "2.1.3",
  "title": "",
  "body": "  Based on , we noticed that if we are in , if we want to span the entire space, we need to have at least two vectors. However, it was not enough to have two vectors, but in addition, these two vectors could not be on the same line. Here we will explore this idea in greater detail. Consider the set of vectors in given by .     Do we need all three of these vectors to reach all of ? If so, explain why. If not, explain why not.      Consider the linear combination of these vectors given by . Express the vector as a scalar multiple of .      Now replace the part of your linear combination, , with its equivalent expression in terms of . Based on your experience working with polynomials in high school, \"factor out\" the vector from the last two terms of your linear combination. What is the new scalar you get for ?      Now you can take your original linear combination in three vectors given by and replace it with a linear combination of only two vectors, namely and . What is this linear combination?      Using your CAS, evaluate both and your new linear combination from part (d) to show they are the same.    "
},
{
  "id": "def-linear-dependent",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#def-linear-dependent",
  "type": "Definition",
  "number": "2.1.10",
  "title": "",
  "body": "  A set of vectors is linearly dependent if one of the vectors can be expressed as a linear combination of other vectors in the set. Otherwise, the set of vectors is called linearly independent .  Put another way, a set of vectors, , in is linearly independent if the equation has only the trivial solution where all of the . Note that if some of the , then one of those terms could be isolated on one side of the equation and that vector could be shown to be a linear combination of the others.     "
},
{
  "id": "sec21-linearcomb-reaching-space-4-7",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#sec21-linearcomb-reaching-space-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly independent "
},
{
  "id": "sec21-linearcomb-reaching-space-4-8",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#sec21-linearcomb-reaching-space-4-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Caution "
},
{
  "id": "subsec-existence-spanning-3",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#subsec-existence-spanning-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Span "
},
{
  "id": "subsec-existence-spanning-4-1",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#subsec-existence-spanning-4-1",
  "type": "Activity",
  "number": "2.1.4",
  "title": "",
  "body": "  Let us consider vectors in and whether or not we can reach them? From , if we had exactly 2 vectors that did not fall along the same line, we could reach any vector in . Once we added a third vector, we noticed that there could be more than one way to reach a given vector using linear combinations of the vectors, but how many different ways could we do this? In the earlier exploration, you found several, but we need to consider how many there might be.     Suppose we have vectors given by . Note that none of these vectors fall along a common line. Come up with scalars , , and so that . Discuss your strategies in your groups and be prepared to share with the class.      What would happen if you chose a specific scalar for one of the vectors, say ? Can you find and , so that your linear combination will reach ? If so, what are they? If not, explain why not.    If , then you have . What vector equation do you now have to solve for scalar values?      Now change your specific scalar for one of the vectors, say ? Can you find and , so that your linear combination will reach ? If so, what are they? If not, explain why not.    If , then you have . What vector equation do you now have to solve for scalar values?      If you fix one of the scalars, can you always find scalars for the other two so that you can reach ? Why or why not? Can you argue that there are infinitely many linear combinations to reach ?      In the previous parts of this activity, the target vector was always . Will your responses to the earlier parts change if a different target vector is chosen? Does this set of vectors span ?      In your groups, discuss what would happen if you had more than three vectors. Would you still be able to apply your process to produce a linear combination to give any desired target vector? If so, would there be a finite or infinitely many such linear combinations?    "
},
{
  "id": "thm-uniqueness-independent-linear-comb",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#thm-uniqueness-independent-linear-comb",
  "type": "Theorem",
  "number": "2.1.13",
  "title": "",
  "body": "  Given a linearly independent set of vectors, , and any vector, , then the scalars, , needed to reach are unique.    Suppose we have a linearly independent set of vectors, , and any vector, . Further, suppose we also have , such that . If are not unique, then there exists another set of scalars, , such that . Subtracting these equations, we get . Since are linearly independent, this means that , . In otherwords, the scalars are all equal and thus unique.   "
},
{
  "id": "subsec-existence-spanning-7",
  "level": "2",
  "url": "sec21-linearcomb-reaching-space.html#subsec-existence-spanning-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly dependent linearly independent "
},
{
  "id": "sec22-solving-systems",
  "level": "1",
  "url": "sec22-solving-systems.html",
  "type": "Section",
  "number": "2.2",
  "title": "Solving Systems of Equations",
  "body": " Solving Systems of Equations   In this section we will explore processes surrounding solving systems of linear equations. In the last section, we ended by experimenting with various scalars to determine if a set of vectors were linearly independent. Mostly we used trial and error or tried to reduce the linear combinations by chosing a value for one of the scalars and then working backwards to find the remaining scalars. This was a time-consuming process and can often be challenging if there is a unique solution. In this section, we will try a more systematic approach that will help us find the desired scalars more efficiently.    Finding Scalars: Gaussian Elimination  As we ended section 2.1, we wanted to establish whether or not a set of vectors was linealry independent. To do this, we needed to determine whether or not we could find a set of scalar values that would give us a linear combination for other vectors in the set. In addition, we sought to determine the if a vector was in the Span of a set of vectors. For both of these questions, we ultimately want to solve for specific scalars that would meet our desired requirements.  While this process of finding scalars may seem new, it is actually not a new idea. Recall that in high school we solved systems of equations using a variety of techniques including substitution, elimination, and graphing. As the number of variables and equations increased, the techniques of substitution and graphing became very challenging. The process of elimination was generally easier as the number of variables increased and so this process is the one we will refine here.  You may recall that there were certain operations we could perform on equations so that their solution sets did not change. These included multiplying an equation by a nonzero constant, adding equals to equals, and rearranging the equations. For example, since, say, , we can also say that . Similarly for an equation like (for which a solution is clearly and ), then if we multiply both sides by, say 3, we get . Just as and is a solution to the original equation, due to the fact that multiplying both sides of an equation by the same value gives a new equation that is also true, and is also a solution to (i.e. ).  In a similar fashion, if we start with and add the same amount to both sides, we get . If we plug in and we get . In both cases, if we start with an equation with a certain solution, adding the same constant to both sides or multiplying both sides by the same constant will give a new equation for which the solution to the original equation will be a solution to the new equation.  What if we want to add expressions to both sides of an equation? Consider another equation, , that also has a common solution, and . If we add this equation to or earlier equation, , we get where and is still a solution to the result, (see ). What this tells us is that if we seek solutions to a system of equations, we can add any of the equations in the system to each other and get a new equation that also shares the same solution(s) as the previous equations.    Three Lines   (for accessibility)     So now suppose we did not know that the solution to our earlier set of equations, and , was and . How do these manipulations that yield new equations with the same solution help us? As you may recall from your earlier mathematics experiences, we can take the approach of trying to \"eliminate\" a variable from the system so that we can more easily solve for one of the variables. In this case, consider what would happen if we multipled the top equation by -4. This would give us a new equation, , and we can use it in place of the original one. Why multiply it by -4? As we saw, if two equations share the same solution(s), we can add them and the resulting equation will also have the same solution(s). The -4 was selected since it will give a coefficient of that is the opposite of the coefficient of in the second equation so that when added they will cancel each other to leave us only the variable .   Now we can simply plug into either of our original equations to get a value for . Let's use the first equation as it is easier to solve for . This gives which yields .   Now consider the following example where we use this process to find scalars for a linear combination of vectors.     Finding Scalars  Consider a more simplified version of our scenario from Chapter 1 involving prices, and revenue for products we are selling to various companies. In this case, we consider fewer companies and products to make this example easier to disect. Suppose we have the following data for the number of items for two different products for two different companies.    Product Orders    Clients  Product 1  Product 2    Company 1  2  3    Company 2  1  5      In this case we are looking for scalars for prices, and , that provide desired revenues, and . This gives the following vector equation.     A question we might ask is what prices do we need to set so that we have revenue of $43 from Company 1 and $46 from Company 2? It may be that there are no such price combinations that will yield what we want (i.e. does this combination exist?). There may be a case where there are infinitely many such price combinations (i.e. there is not uniqueness). These two fundamental questions of existence and uniqueness will be ones we revisit as we seek solutions to equations.  So now we ask if we can find solutions to the vector equation, ?  However, this is not such an unusual task. Recall from high algebra we solved these equations before, but they were simply written in a different form. This vector equation could also be written as    Now we can use the process of Gaussian elimination to reduce these equations to only one variable. Suppose we multiply the second equation by and add the resulting equations to obtain the following.     Now we can use our value for in one of our original equations (let's use the second one since it is easier) to get which gives .  Checking this result we get .       Consider the following system of equations.        Use the process of Gaussian elimination to reduce the system of 3 equations and 3 unknowns to a system of 2 equations and 2 unknowns by scaling and\/or adding pairs of these equations.      Now eliminate another of your two remaining variables from part (a) in similar manner (scaling and\/or adding pairs of these equations) to find a solution value for one of the three variables.      Use your value from part (b) and one of your equations found in part (a) to solve for a second unknown.      Use the two values you have found so far along with one of your original equations to solve for the last unknown.      Use the GeoGebra applet in to verify your solution to the system. Feel free to rotate the planes so that the intersection point of all three is visible.    3D System of Equations         Now that we have worked through a process to reduce a system of equations to fewer and fewer variables, we can summarize the operations that changed the look of the equations without changing the solutions. We essentially have three types of \"moves\" we can do that will create equivalent systems of equations that maintain the same solutions as the original system.     Scaling   In this situation, we can multiply an entire equation by a constant and not change the solutions. For example, will have the same solutions as the original, .       Swapping   Here we are allowing the position of the listed equations within the system to be simply swapped. This principle is kind of obvious since the two systems of equations clearly have the same solution!       Replacing   In this situation, we found that if we multiply one equation by a scalar (even if it is just 1) and add it to another equation and use this result in place of the equation we added the scalar multiple to, the solutions to the system remain the same. For example, we can take a system like and take, say 3, times the bottom equation and add it to the top equation replacing the top equation with this result to get and we will still have the same solution, and , be the solution to both systems.        As you may have noticed in both of these examples for solving a system with Gaussian elimination, to make it easier to manipulate and perform operations on the equations, we made it a practice to keep the variables aligned with each other and then performed the multiplication by scalars and addition of equations using the three \"moves\" described above. This helped us make sure we were not accidently adding the coefficients of different variables together. For the most part, this practice just makes \"bookkeeping\" easier. This should sound kind of familiar. We did the same thing in Chapter 1 when we introduced vectors and matrices. We viewed these arrays of elements as an easier way to keep track of corresponding components that represented values for the same type of quantities (e.g. orders of the same product, price of the same product, revenue from the same company) without needing to label them. So the natural question is, do we need to write the variable name if we already know which variable is associated with which column in our \"stacked\" representation of the equations? The answer is a resounding, no! So let's consider what would happen if we were to forego the writing of the variable names.    Augmented Matrices and Stripping Away Variable Names  When we look at the general structure we have been using for our equations in the Guassian elimination process, we wanted our equations to be of the form, , where the variables are all on the left side of the equation and the right side contains only a numerical value. If we assume this structure for our equations, we can define them in the following way.    A linear equation in the variables, may be written in the form where the real numbers represented by are called coefficients and is a constant real number.  When we have several such equations that share common variables, we say that it is a system of linear equations or, more simply, a linear system .    Recall from , we began by looking at systems of equations from the standpoint of transformations.   Here we are separating out the variable names into a single vector and the coefficients are isolated into a matrix. If you wanted to give a name to this matrix, you might call it...you guessed it, a coefficient matrix .    From Equations to Matrix Transformation   Consider the following system of equations.        Express this system of equations as a coefficient matrix multiplied by a vector that is equal to another vector.      Use your System of Equations command on your CAS to solve this system for , , and .      Use the solutions you found in part (b) to show that the matrix-vector equation you created in part (a) is true by multiplying your coefficient matrix by the vector made up of the components from your solutions.      In the last activity, you took a system of equations and converted it into a coefficient matrix, a vector whose components represented the variables, and another vector whose components represented the values from the right-hand side of the equations. From Chapter 1, we viewed these equations as transformations and in this section we used Gaussian elimination to find solutions for the variables in the equations (see and ). So how are these connected? Think back to our use of Gaussian elimination. What did we really manipulate? We kept the variables aligned for convenience and multiplied entire equations by scalar values and from time to time added equations together. However, the only things we really changed in the process were the values of the coefficients (the very things that become isloated in the coefficient matrix in our transformation version of the equations). So the natural question is, why do we waste our time writing down the variable names if we are just going to keep them aligned anyway. Instead, why don't we simply work with the numerical values of the coefficients?  To enable us to more easily work with the solution process, we can tweak our coefficient matrix just a bit, so that the numerical values from the right-hand side of our equations (which do change as we manipilate) are also included. We can simply augment our coefficient matrix with these values. Consider the system of equations given below. We can use the processes of scaling equations and adding them together like in to try and simplify the system to find solutions.     In this case we can create the coefficient matrix and then augment it with an additional column containing the values from the right-hand side of the equations. In this case we get     Once we have reduced the equations to an augmented matrix with the coefficients on the left side of the bar and the numerical values from the right side of the equations on the right side of the bar, we can use the process we used earlier to operate on the matrix and reduce it to a simplified form. Recall that before, we wanted to eliminate variables so that we could get an equation with just one variable in it. Here we will do the same, but instead, we wish to manipulate the matrix so that we have entries that are zero in locations (this is like eliminating the variable from that particular equation). Note that the rows represent equations and the columns represent the variables, , , and , respectively.  Suppose we want to eliminate the variable, , from the second row (equation). As we did earlier, we can multiply the first row (equation) by and add it to the second row and use the new resulting row (equation) to replace the old version of the second row. This would give us the following.     This can also be done step-by-step on most basic graphing calculators. In this case, the first entry in the command is the scalar (-4), followed by the matrix, then the row that is being scaled (row 1), and finally the row that is being added to and thus (row 3).    Using CAS Stage 1    Now we can do the same thing for the third row multiplying Row 1 by and adding it to Row 3 and replacing Row 3 with the result.       Using CAS Stage 1    At this point, we can begin to back-solve since the last row represents an equation that contains only the variable . Once we have this value, we can use it in since it now has entries representing and and inserting our value for leaves just . Finally, we then use the values we have obtained for and in the first row to get our value for .  From this version of the augmented matrix, we can see that and so . As a result, we can see that and so . Using the first row with these values gives us . This results in .  The fact that our matrix has zeros in the lower left that enable us to easily back-solve means that this kind of matrix is special and thus deserves a special name. We refer to this structure of a matrix as upper triangular since the nonzero values of the coefficient matrix portion of the augmented matrix form a triangle.  If we want, we could make our back-solving easier by scaling the last two rows. If we multiply both the second and third rows by , we get     Here the command first takes the scalar, followed by the matrix and then the row that is being scaled.          From this version of the augmented matrix, we can more easily see that . As a result, we can see that and so . Using the first row with these values gives us . This results in .  You may notice that we can continue to use these manipulation processes to further reduce this matrix so that the \"back-solve\" process will be even easier. For example, wouldn't it be great if we could get the matrix into the form where we can easily read off the solutions since each row has a 1 in the position of a different variable and zeros everywhere else (i.e. no other substitutions to make)? We will address this later in this section.     Consider the following system of equations.      Convert the system of equations into an augmented matrix.      Use Gaussian Elimination to reduce your augmented matrix to one that is in upper triangular form. Be sure to indicate your process at each stage by using notation such as or . Feel free to use technology (e.g. command) to perform the arithmetic, but make sure to show your stages in the reduction process.      After you have solved for one of the values of the unknowns, back-solve to find the remaining unknown values.      Now that we have converted a system of equations to augmented matrix form and then used the process of Gaussian elimination to reduce the system and find solutions, we might ask the question, will we always be able to reduce the matrix to a nice upper triangular form where back-solving to obtain a unique solution is possible? As you will recall from , not all linear combinations of vectors (and thus systems) end with a unique solution. This means that it will not always be able to find a unique solution to a given system of equations and thus get a nice upper triangular matrix. In the next section, we will examine how we can use the form of a matrix for linear systems to determine whether or not the solution(s) is (are) unique, infinite, or non-existent by simplying looking at a reduced version of the matrix.   "
},
{
  "id": "finding-scalars-2",
  "level": "2",
  "url": "sec22-solving-systems.html#finding-scalars-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Span "
},
{
  "id": "three-lines",
  "level": "2",
  "url": "sec22-solving-systems.html#three-lines",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Three Lines   (for accessibility)   "
},
{
  "id": "finding-scalars-11",
  "level": "2",
  "url": "sec22-solving-systems.html#finding-scalars-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "existence uniqueness "
},
{
  "id": "solve-3by3-system",
  "level": "2",
  "url": "sec22-solving-systems.html#solve-3by3-system",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": "  Consider the following system of equations.        Use the process of Gaussian elimination to reduce the system of 3 equations and 3 unknowns to a system of 2 equations and 2 unknowns by scaling and\/or adding pairs of these equations.      Now eliminate another of your two remaining variables from part (a) in similar manner (scaling and\/or adding pairs of these equations) to find a solution value for one of the three variables.      Use your value from part (b) and one of your equations found in part (a) to solve for a second unknown.      Use the two values you have found so far along with one of your original equations to solve for the last unknown.      Use the GeoGebra applet in to verify your solution to the system. Feel free to rotate the planes so that the intersection point of all three is visible.    3D System of Equations       "
},
{
  "id": "finding-scalars-14",
  "level": "2",
  "url": "sec22-solving-systems.html#finding-scalars-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Scaling Swapping Replacing "
},
{
  "id": "def-linear-equations",
  "level": "2",
  "url": "sec22-solving-systems.html#def-linear-equations",
  "type": "Definition",
  "number": "2.2.5",
  "title": "",
  "body": "  A linear equation in the variables, may be written in the form where the real numbers represented by are called coefficients and is a constant real number.  When we have several such equations that share common variables, we say that it is a system of linear equations or, more simply, a linear system .   "
},
{
  "id": "stripping-variables-6",
  "level": "2",
  "url": "sec22-solving-systems.html#stripping-variables-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix "
},
{
  "id": "stripping-variables-7",
  "level": "2",
  "url": "sec22-solving-systems.html#stripping-variables-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "System of Equations "
},
{
  "id": "stripping-variables-11",
  "level": "2",
  "url": "sec22-solving-systems.html#stripping-variables-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augment "
},
{
  "id": "stripping-variables-13",
  "level": "2",
  "url": "sec22-solving-systems.html#stripping-variables-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "stripping-variables-23",
  "level": "2",
  "url": "sec22-solving-systems.html#stripping-variables-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper triangular "
},
{
  "id": "system-solve-upper-triangular",
  "level": "2",
  "url": "sec22-solving-systems.html#system-solve-upper-triangular",
  "type": "Activity",
  "number": "2.2.3",
  "title": "",
  "body": "  Consider the following system of equations.      Convert the system of equations into an augmented matrix.      Use Gaussian Elimination to reduce your augmented matrix to one that is in upper triangular form. Be sure to indicate your process at each stage by using notation such as or . Feel free to use technology (e.g. command) to perform the arithmetic, but make sure to show your stages in the reduction process.      After you have solved for one of the values of the unknowns, back-solve to find the remaining unknown values.    "
},
{
  "id": "sec23-solution-spaces-rref",
  "level": "1",
  "url": "sec23-solution-spaces-rref.html",
  "type": "Section",
  "number": "2.3",
  "title": "Solution Spaces and Reduced Row Echelon Form",
  "body": " Solution Spaces and Reduced Row Echelon Form   In this section we will expand on the process for solving systems of equations using matrices and try to characterize the structure of the reduced matrix as it relates to solutions to the system.    Matrices and Solution Spaces   In the last section, it seemed that when we had a system of 3 equations and 3 unknowns, the solution was always unique. Note that we have already seen, uniqueness is not always guaranteed (see ). So how does the reduced version of the augmented matrix give us clues as to the nature of the solution(s)? Let's investigate this here from both a numerical and geometric point of view.      Consider the following system of equations.      Convert the system of equations into an augmented matrix.      Use Gaussian Elimination to reduce your augmented matrix to one that is in upper triangular form. Be sure to indicate your process at each stage by using notation such as or . Feel free to use technology (e.g. command) to perform the arithmetic, but make sure to show your stages in the reduction process.      Describe any differences you see with respect to the reduced matrix. How is it different from the reduced forms you have seen thus far?      What does the last row tell you about choices for , , and when it comes to the equation represented by that row?      What variables have unique and fixed values when it comes to solutions to the system? Explain your thinking.      What variables have solutions that depend on other variables? Explain any dependencies you see. How many solutions are there to this system?      Consider the 3D sketch of these 3 equations in (note that , , and for the purpose of the sketch). Explain how your response in part (f) is consistent with the sketch.      Use your response in part (f) and generate at least 3 different solutions to the system.      Adjust the coordinates for point A in the sketch in to match the values for , , and you found in part (h). Explain how the location of the point A in the sketch for each solution demonstrates it as a solution to the system of equations. How does the sketch illustrate the nature of the number of solutions to the system? Explain the geometric properties of the sketch that would show all of the solutions.        3D System of Equations     Now that we can see that there are scenarios where we can have more than one solution to a system of equations, are there other possibilities? The next activity will explore what else can happen from both a matrix perspective and a geometric one.     Consider the following system of equations.      Convert the system of equations into an augmented matrix.      Use Gaussian Elimination to reduce your augmented matrix to one that is in upper triangular form. Be sure to indicate your process at each stage by using notation such as or . Feel free to use technology (e.g. command) to perform the arithmetic, but make sure to show your stages in the reduction process.      Describe any differences you see with respect to the reduced matrix. How is it different from the reduced forms you have seen thus far?      What does the last row tell you about choices for , , and ?      What variables have unique and fixed values when it comes to solutions to the system? Explain your thinking.      What variables have solutions that depend on other variables? Explain any dependencies you see. How many solutions are there to this system?      Consider the 3D sketch of these 3 equations in (note that , , and for the purpose of the sketch). Explain how your response in part (f) is consistent with the sketch.      Use your response in part (f) to explain the nature of the solutions to the system.      Adjust the coordinates for point A in the sketch in to match the values for , , and you found in part (h), if you found any. Explain how the location of the point A in the sketch for any solutions you may or may not have found demonstrates the nature of the number of solutions to the system?        3D System of Equations     Now that we have examined several possible scenarios with respect to solutions to a system of equations, it begins to make sense what is happening both symbolically and geometrically when it comes to solutions. We can define what it means to be a solution in the following way.    Solution of a Linear System   A solution to a linear system of equations is simply a set of values, , (sometimes we express this as an ordered n-tuple of the form, ), such that choosing these values for variables make all of the equations in the system true at the same time.     In the last several activities, the solutions to systems have suggested some common conclusions when it comes to the nature of these solutions.   Solutions to Systems of Linear Equations  Given a set of linear equations, there are only the following three possibilities for solutions to the system:   There is exactly one solution.    There are infinitely many solutions.    There are no solutions.      As we begin to charaterize the solutions to a system of equations, we are really attempting to describe the set in terms of some sort of visual regularity where the solutions (or points) \"live\". For example, in the previous activities, we could see geometrically for a 3D system that we could have a single point (solution) where all three planes intersect (i.e. solves all three equations at once). We could also have the situation where all three planes intersect in a line giving infinitely many points or solutions to the system. For the 3D system, we can have still another type of situation yielding infinitely many solutions. What if all three equations form planes that are literally on top of each other? This would mean that any point in that 2-dimensional plane would be a solution (not just along a single line). Since there are also infinitely many points in a plane this would fall into category 2 of , but be a slightly different scenario than a line.  Since we want to distinguish among these possibilities and describe where these solutions \"live\", we decide to call this world where solutions exist their solution space . For the type of system in , we noted that there are no places where all three planes intersect and so the space that describes this set of solutions is empty . If we want to allow a single equation with all coefficients, 0, , here any point (solution) consisting of three real numbers, will work and thus all of provides a solution.    Solution Space   We call the set of all sets, , or put another way, points, , that satisify the system of equations the solution space . Note that in our examples of 3 equations in 3 variables, these 3-tuples were physically represented as points in 3-dimensional space. The solution space could be simply a single point or possibly an infinite number of points forming a line or other geometric object (in 3D, a plane).       Identifying Solution Spaces    Create an augmented matrix for the system   and reduce it to describe the solution space. Be specific and explain both the numerical nature of the solution as well as the geometric interpretation.      Consider a system in and that when reduced gives the row equivalent matrix provide a system of 3 equations that fit this description and describe its solution set. Give both a numerical description as well as a geometric one.      Consider a system in and that when reduced gives the row equivalent matrix provide a system of 3 equations that fit this description and describe its solution set. Give both a numerical description as well as a geometric one.      Suppose we have a augmented matrix of the form where the 's represent any real numbers (not necessairly the same).     What kind of system does this represent (number of equations, number of variables)?    Given what you have discovered thus far, do you think this system has exactly one, infinitely many, or no solutions? Explain your reasoning. Would it depend on the specific values?    Suppose we now get specific and the matrix we have is row equivalent to the augmented matrix do you think this system has exactly one, infinitely many, or no solutions? Explain your reasoning. If there is exactly one solution, give it. If there are infinitley many solutions, provide a way to generate all of them. If there are no solutions, provide a justification. Let the first column represent , the second represent , etc. in your description.           Reduced Row Echelon Form   Recall that in , we focused on getting an augmented matrix into upper triangular form . In particular, toward the end of this process, we tried to make back-solving easier by making sure that the coefficient of the lead position (variable) in each row was 1 and that the rows toward the bottom had successively more zeros moving from left to right. We refer to this structure of the matrix as row echelon form and give the following definition to explicitly describe what we mean.    Row Echelon Form   A matrix is in row echelon form if it meets the following three criteria.    Zeros at the Bottom   If the matrix has any rows that consist of all zeros, these rows appear at the bottom of the matrix.     Leading Entries Are 1   The first non-zero entry in each non-zero row (aka the \"lead entry\") is a 1. These leading entries are also called pivots .     Staggered Leads   If we choose any two successive rows starting from the top, the lead entry of the lower row is to the right of the lead entry of the higher row. This creates a \"staggered\" or \"stairstep\" pattern.         In the previous activities, we tried to get matrices into row echelon form so that we can more easily back-solve, but you may have noticed that after a matrix is in row echelon form , there can still be further reductions that could be done. This next activity examines ways this might be done and some limitations to this process.     Consider a system of equations whose augmented matrix is row equivalent to (note this is in row echelon form)      This system has an infinite number of solutions. Suppose we want to generate solutions to this system. Describe a process for generating the solutions. What variables are \"free\" to be used to generate the other variables?      Since the first and second columns contain zeros in the last two rows, we cannot multiply the second or thrid rows by a scalar and add them to the first row to place zeros in either of the first two positions of the first row (we are stuck with the 1 and 4 in those positions). However, the second row has a 1 and -1 in the third and fourth positions, respectively. This means we could use the second row to further reduce the third or fourth positions in first row to zero. This would make back-solving even easier when the time comes.  Using row operations with row 2, try to reduce this matrix further to place a zero in the first row at the third position. Explain your process.      Using row operations with row 2, try to reduce the matrix from part (b) further to place a zero in the first row at the fourth position. Explain your process. Describe any issues you encounter.      Can you reduce the original matrix to have zeros in the first row in both the third and fourth positions?      The dilemma we encountered in raises an interesting question. How far can we reduce a matrix before further manipulation with row operations begins to screw up entries we have already reduced to zero entries? This question prompts us to refine our idea of row echelon form leading to a definition of what we call reduced row echelon form by adding one additional criteria to our row echelon form definition ( ).    Reduced Row Echelon Form   A matrix is in reduced row echelon form if it meets the following four criteria.    Zeros at the Bottom   If the matrix has any rows that consist of all zeros, these rows appear at the bottom of the matrix.     Leading Entries Are 1   The first nonzero entry in each nonzero row (aka the \"lead entry\") is a 1. These leading entries are also called pivots .     Staggered Leads   If we choose any two successive rows starting from the top, the lead entry of the lower row is to the right of the lead entry of the higher row. This creates a \"staggered\" or \"stairstep\" pattern.     Lead Entry Sole Non-zero Column Entry   The lead entries are the only nonzero entries in their respective columns.        From a visual sense, a matrix that is in reduced row echelon form would look something like where the *'s could be any real numbers. Notice that the pivots are staggered and the lead entries of 1 in each row are always to the right of the lead entries of the rows above them. In addition, all entries in the column above and below a pivot are always zero.     Consider the following augmented matrices. Place them in reduced row echelon form (rref) using basic row operations if they are not already in rref . Again, be sure to indicate your process at each stage by using notation such as or . Feel free to use technology (e.g. command) to perform the arithmetic, but make sure to show your stages in the reduction process. After they have been reduced, describe the solution space in each case. If the solution space is nonempty, describe its geometric nature as well.                          Send a spy from your group to another group to compare your group's rref form for each case. Note anything you discover.      When your spy in part (d) of came back from looking at the results of reduced row echelon forms from the other groups, you may have been surprised that they were all the same. This leads us to a remarkable theorem regarding the reduced row echelon form (rref) of any matrix. Your observation of the uniqueness of the rref will play an important role in finding vectors that are \"essential\" for a set to have in order to span a space and which ones are \"redundant\".    Uniqueness of RREF Matrix   For any given matrix, , its reduced row echelon form matrix is unique.      "
},
{
  "id": "act-system-solve-infinite-solutions",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#act-system-solve-infinite-solutions",
  "type": "Activity",
  "number": "2.3.1",
  "title": "",
  "body": "  Consider the following system of equations.      Convert the system of equations into an augmented matrix.      Use Gaussian Elimination to reduce your augmented matrix to one that is in upper triangular form. Be sure to indicate your process at each stage by using notation such as or . Feel free to use technology (e.g. command) to perform the arithmetic, but make sure to show your stages in the reduction process.      Describe any differences you see with respect to the reduced matrix. How is it different from the reduced forms you have seen thus far?      What does the last row tell you about choices for , , and when it comes to the equation represented by that row?      What variables have unique and fixed values when it comes to solutions to the system? Explain your thinking.      What variables have solutions that depend on other variables? Explain any dependencies you see. How many solutions are there to this system?      Consider the 3D sketch of these 3 equations in (note that , , and for the purpose of the sketch). Explain how your response in part (f) is consistent with the sketch.      Use your response in part (f) and generate at least 3 different solutions to the system.      Adjust the coordinates for point A in the sketch in to match the values for , , and you found in part (h). Explain how the location of the point A in the sketch for each solution demonstrates it as a solution to the system of equations. How does the sketch illustrate the nature of the number of solutions to the system? Explain the geometric properties of the sketch that would show all of the solutions.    "
},
{
  "id": "3d-system-infinite-solution",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#3d-system-infinite-solution",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " 3D System of Equations   "
},
{
  "id": "act-system-solve-no-solutions",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#act-system-solve-no-solutions",
  "type": "Activity",
  "number": "2.3.2",
  "title": "",
  "body": "  Consider the following system of equations.      Convert the system of equations into an augmented matrix.      Use Gaussian Elimination to reduce your augmented matrix to one that is in upper triangular form. Be sure to indicate your process at each stage by using notation such as or . Feel free to use technology (e.g. command) to perform the arithmetic, but make sure to show your stages in the reduction process.      Describe any differences you see with respect to the reduced matrix. How is it different from the reduced forms you have seen thus far?      What does the last row tell you about choices for , , and ?      What variables have unique and fixed values when it comes to solutions to the system? Explain your thinking.      What variables have solutions that depend on other variables? Explain any dependencies you see. How many solutions are there to this system?      Consider the 3D sketch of these 3 equations in (note that , , and for the purpose of the sketch). Explain how your response in part (f) is consistent with the sketch.      Use your response in part (f) to explain the nature of the solutions to the system.      Adjust the coordinates for point A in the sketch in to match the values for , , and you found in part (h), if you found any. Explain how the location of the point A in the sketch for any solutions you may or may not have found demonstrates the nature of the number of solutions to the system?    "
},
{
  "id": "3d-system-no-solution",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#3d-system-no-solution",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": " 3D System of Equations   "
},
{
  "id": "augmented-matrices-9",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#augmented-matrices-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution "
},
{
  "id": "prop-possible-solution-types",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#prop-possible-solution-types",
  "type": "Proposition",
  "number": "2.3.4",
  "title": "Solutions to Systems of Linear Equations.",
  "body": " Solutions to Systems of Linear Equations  Given a set of linear equations, there are only the following three possibilities for solutions to the system:   There is exactly one solution.    There are infinitely many solutions.    There are no solutions.     "
},
{
  "id": "augmented-matrices-13",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#augmented-matrices-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution space empty "
},
{
  "id": "augmented-matrices-14",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#augmented-matrices-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution space solution space "
},
{
  "id": "act-identify-solution-spaces",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#act-identify-solution-spaces",
  "type": "Activity",
  "number": "2.3.3",
  "title": "Identifying Solution Spaces.",
  "body": " Identifying Solution Spaces    Create an augmented matrix for the system   and reduce it to describe the solution space. Be specific and explain both the numerical nature of the solution as well as the geometric interpretation.      Consider a system in and that when reduced gives the row equivalent matrix provide a system of 3 equations that fit this description and describe its solution set. Give both a numerical description as well as a geometric one.      Consider a system in and that when reduced gives the row equivalent matrix provide a system of 3 equations that fit this description and describe its solution set. Give both a numerical description as well as a geometric one.      Suppose we have a augmented matrix of the form where the 's represent any real numbers (not necessairly the same).     What kind of system does this represent (number of equations, number of variables)?    Given what you have discovered thus far, do you think this system has exactly one, infinitely many, or no solutions? Explain your reasoning. Would it depend on the specific values?    Suppose we now get specific and the matrix we have is row equivalent to the augmented matrix do you think this system has exactly one, infinitely many, or no solutions? Explain your reasoning. If there is exactly one solution, give it. If there are infinitley many solutions, provide a way to generate all of them. If there are no solutions, provide a justification. Let the first column represent , the second represent , etc. in your description.       "
},
{
  "id": "reduced-row-echelon-2-1",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#reduced-row-echelon-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row echelon form "
},
{
  "id": "reduced-row-echelon-2-2",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#reduced-row-echelon-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row echelon form Zeros at the Bottom Leading Entries Are 1 pivots Staggered Leads "
},
{
  "id": "act-matrix-reduce-rref",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#act-matrix-reduce-rref",
  "type": "Activity",
  "number": "2.3.4",
  "title": "",
  "body": "  Consider a system of equations whose augmented matrix is row equivalent to (note this is in row echelon form)      This system has an infinite number of solutions. Suppose we want to generate solutions to this system. Describe a process for generating the solutions. What variables are \"free\" to be used to generate the other variables?      Since the first and second columns contain zeros in the last two rows, we cannot multiply the second or thrid rows by a scalar and add them to the first row to place zeros in either of the first two positions of the first row (we are stuck with the 1 and 4 in those positions). However, the second row has a 1 and -1 in the third and fourth positions, respectively. This means we could use the second row to further reduce the third or fourth positions in first row to zero. This would make back-solving even easier when the time comes.  Using row operations with row 2, try to reduce this matrix further to place a zero in the first row at the third position. Explain your process.      Using row operations with row 2, try to reduce the matrix from part (b) further to place a zero in the first row at the fourth position. Explain your process. Describe any issues you encounter.      Can you reduce the original matrix to have zeros in the first row in both the third and fourth positions?    "
},
{
  "id": "reduced-row-echelon-5",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#reduced-row-echelon-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row echelon form reduced row echelon form row echelon form "
},
{
  "id": "reduced-row-echelon-6",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#reduced-row-echelon-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reduced row echelon form Zeros at the Bottom Leading Entries Are 1 pivots Staggered Leads Lead Entry Sole Non-zero Column Entry "
},
{
  "id": "reduced-row-echelon-8",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#reduced-row-echelon-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reduced row echelon form (rref) rref "
},
{
  "id": "reduced-row-echelon-10",
  "level": "2",
  "url": "sec23-solution-spaces-rref.html#reduced-row-echelon-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reduced row echelon form "
},
{
  "id": "sec24-solution-spaces-pivots",
  "level": "1",
  "url": "sec24-solution-spaces-pivots.html",
  "type": "Section",
  "number": "2.4",
  "title": "Describing Solution Spaces and Pivotal Influence",
  "body": " Describing Solution Spaces and Pivotal Influence   In this section we use the reduced row echelon form and the location of pivots to describe the solution spaces for systems of equations. These locations of pivots will also be \"pivotal\" for determining the vectors that are essential for spanning a space.    Consistent and Inconsistent Systems   gave us three scenarios that can happen with linear systems of equations. The first two deal with when we have solutions (either a unique solution or infinitely many solutions). In the case where solutions exist, we call the system consistent . In the case where there are no solutions, we say that the system is inconsistent . You may recall these scenarios from with and with where in one case you could place a point in so that it existed in all three planes at once and in the other case it was not possible to have a point that existed in all three planes. So when it comes to solutions to systems of equations, we deal with the two fundamental questions of existence and uniqueness .  When looking to determine whether a system of equations is consistent or inconsistent, it would be nice to have a simple way to examine its corresponding matrix and know the type of system we have. To explore this question, consider the following activity.      Consider the following augmented matrices     Place these in reduced row echelon form and locate the pivots of each matrix. Use your command on your CAS for this. Determine if the system of equations represented by these matrices are consistent or inconsistent.      Notice that each of the reduced row echelon forms of these matrices has a row consisting of all zeros. Does the presence of an all zero row influence whether or not the system is consistent or inconsistent? Explain your reasoning.      In looking at the reduced row echelon form of the three matrices, are there any forms that lead you to believe that system is inconsistent? Place your observations into a conjecture for using the pivot positions of the reduced row echelon form of an augmented matrix as a means of determining that a system is inconsistent.      The nature of solutions we noticed in has a direct connection to the pivot locations from the reduced row echelon form of the augmented matrix created for the system of equations we are trying to solve.     Consider one of the matrices from .      Use the reduced row echelon form you found in to express and in terms of . Note that here is a free variable.      Use what you found in part (a) to express all solutions to the system as the sum of two vectors in where one of the vectors in the sum is fixed and the other has a scalar that can be any value. In other words, of the form where and is a scalar.      To test your solutions, consider the linear equations as a transformation. Choose and on your CAS, compute for the vectors and you found. Does the result match your expectation from your original augmented matrix? Explain.      Repeat this process on your CAS by choosing and compute for the vectors and you found. Does the result match your expectation from your original augmented matrix? Explain.      Repeat this process on your CAS by using simply and compute for the vectors and you found. Does the result match your expectation from your original augmented matrix? Explain. How many solutions does this imply there are for the system?        Pivots, Consistency, and Uniqueness  In , we alluded to the term pivot with respect to leading entries in the reduced row echelon form of a matrix. Here we will expand on this idea since we want to explore connections between pivots and the solutions to systems of equations. In particular, how might pivots help us identify free variables in a system and use them to generate the infinitely many solutions that might exist for a system? To this end, let's formalize what we mean by a pivot position .     A pivot position for matrix, , is a position of a leading entry in the reduced row echelon form of .     In the study of linear algebra, a fundamental concept for understanding the structure and properties of matrices and systems of linear equations is that of pivot positions. Some of the purposes of identifying pivot positions is to gain insight into the rank of a matrix, the solvability of linear systems, and the basis of vector spaces. We will discuss basis later in chapter 3, but for now we will examine connections to solvability of systems. These positions are key to the process of Gaussian elimination and row reduction as we have seen, which are standard algorithms for simplifying matrices into more manageable forms.  The term \" pivot \" itself originates from the idea of a central or critical point around which other elements are organized or rotated. In the context of a matrix, a pivot position acts as such a central point. During the process of row reduction, we systematically eliminate entries below and\/or above certain leading entries. These leading entries are precisely what we call pivots. In , you noticed that there comes a point where your reduction of a matrix is limited and you cannot affect changes to some rows without messing up zeros we have already placed in other rows. The pivot in a row will allow us to reduce all entries above and below it to zero while not changing any entries that occur in columns where there are zeros to the left of the pivot position. Since there are only zeros to the left of a pivot, the use of that pivot row in the row reduction process to reduce other rows will not affect the entries in the same column as those zeros for the other rows because we will simply be adding zero to those entries. This gives us a way to manipulate pivot column entries while leaving other columns alone (provided those columns are the columns where there are zeros in the row being used).  As defined in , a pivot position in a matrix refers to the location of a leading entry (the first non-zero entry) in a row of its row echelon form. When a matrix is transformed through elementary row operations into row echelon form, the non-zero rows will each have a unique leading entry. The column containing this leading entry is then called a pivot column . The number of pivot positions in a matrix is equal to its rank , which signifies the maximum number of linearly independent rows or columns in the matrix. This concept is crucial because it directly relates to the dimension of the column space and row space of the matrix, providing essential information about the underlying linear transformations and vector spaces associated with the matrix.  The term rank has its origins in military formations. In military echelon formations on the battlefield, ranks are a structured hierarchy, with various officers and enlisted personnel leading units at different levels. Echelon formation is a tactical arrangement where units are staggered diagonally, allowing for maneuverability and visibility. Since our reduced row matrices have this staggered structure (if you ignore the presence of the zeros to the left of pivots), it makes sense why the term rank is used to identify how many linearly independent rows or columns as these are essentially the number of what would be the ranking officers in the battlefield formations. As you can see, the word echelon also comes from military terminology.   "
},
{
  "id": "consistent-systems-2",
  "level": "2",
  "url": "sec24-solution-spaces-pivots.html#consistent-systems-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent inconsistent "
},
{
  "id": "act-rref-consistent",
  "level": "2",
  "url": "sec24-solution-spaces-pivots.html#act-rref-consistent",
  "type": "Activity",
  "number": "2.4.1",
  "title": "",
  "body": "   Consider the following augmented matrices     Place these in reduced row echelon form and locate the pivots of each matrix. Use your command on your CAS for this. Determine if the system of equations represented by these matrices are consistent or inconsistent.      Notice that each of the reduced row echelon forms of these matrices has a row consisting of all zeros. Does the presence of an all zero row influence whether or not the system is consistent or inconsistent? Explain your reasoning.      In looking at the reduced row echelon form of the three matrices, are there any forms that lead you to believe that system is inconsistent? Place your observations into a conjecture for using the pivot positions of the reduced row echelon form of an augmented matrix as a means of determining that a system is inconsistent.    "
},
{
  "id": "act-generate-solutions",
  "level": "2",
  "url": "sec24-solution-spaces-pivots.html#act-generate-solutions",
  "type": "Activity",
  "number": "2.4.2",
  "title": "",
  "body": "  Consider one of the matrices from .      Use the reduced row echelon form you found in to express and in terms of . Note that here is a free variable.      Use what you found in part (a) to express all solutions to the system as the sum of two vectors in where one of the vectors in the sum is fixed and the other has a scalar that can be any value. In other words, of the form where and is a scalar.      To test your solutions, consider the linear equations as a transformation. Choose and on your CAS, compute for the vectors and you found. Does the result match your expectation from your original augmented matrix? Explain.      Repeat this process on your CAS by choosing and compute for the vectors and you found. Does the result match your expectation from your original augmented matrix? Explain.      Repeat this process on your CAS by using simply and compute for the vectors and you found. Does the result match your expectation from your original augmented matrix? Explain. How many solutions does this imply there are for the system?    "
},
{
  "id": "pivots-consistency-uniqueness-2",
  "level": "2",
  "url": "sec24-solution-spaces-pivots.html#pivots-consistency-uniqueness-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivot pivot position "
},
{
  "id": "pivots-consistency-uniqueness-3",
  "level": "2",
  "url": "sec24-solution-spaces-pivots.html#pivots-consistency-uniqueness-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivot position "
},
{
  "id": "pivots-consistency-uniqueness-4",
  "level": "2",
  "url": "sec24-solution-spaces-pivots.html#pivots-consistency-uniqueness-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rank basis basis "
},
{
  "id": "pivots-consistency-uniqueness-6",
  "level": "2",
  "url": "sec24-solution-spaces-pivots.html#pivots-consistency-uniqueness-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivot column rank column space row space "
},
{
  "id": "pivots-consistency-uniqueness-7",
  "level": "2",
  "url": "sec24-solution-spaces-pivots.html#pivots-consistency-uniqueness-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rank rank "
},
{
  "id": "sec25-applications",
  "level": "1",
  "url": "sec25-applications.html",
  "type": "Section",
  "number": "2.5",
  "title": "Applications for Systems of Linear Equations",
  "body": " Applications for Systems of Linear Equations   In this section we use the techniques we developed earlier to help us solve general systems of linear equations as they arise in real-world scenarios.    Forming Systems as Matrices      Viewing Systems with Multiple Representations      Row Reducing Matrices to Find Solutions     "
},
{
  "id": "sec31-gridding-space",
  "level": "1",
  "url": "sec31-gridding-space.html",
  "type": "Section",
  "number": "3.1",
  "title": "Bases and the Way We Grid Space",
  "body": " Bases and the Way We Grid Space   In this section we look at how we can grid space in many different ways and how we can move between these gridding systems. Recall from , we used two different gridding systems to describe the location of a fly on the ceiling.     Carter Caves State Park: Revisited   Descartes Fly     Descartes' Fly: Revisited   Descartes Fly      You will also recall that in we explored how many vectors we needed for linear combinations of these vectors to describe a location in . In particular, we found that if we had three or more vectors that were linearly indepndent in pairs, we did not need them all. We only needed two linearly independent vectors to be able to describe any location in with a linear combination of them.    Bases: Minimal Spanning Sets  At this point, we want to explore how different ways of gridding a space can have different advantages and disadvantages. From , we had seen each of two grid systems as well as these superimposed on each other.      Fly and Grid      Fly and Grid      Fly and Both Grids      In the \"standard\" or Cartesian grid system shown in , the linear combination of vectors to reach the fly was . While the linear combination of vectors from the grid system was . Assuming that each of these systems give unique linear combinations of their respective vectors to reach any vector in , we could represent the fly's location in two different ways. In the \"standard\" set of vectors, , the coordinates would be . On the other hand, using the set, , the coordinates would be . Note that if we listed the vectors in different orders in the set of vectors, say or , we would need to reverse the order the coordinates are given in the ordered pairs . After all, they are called ordered pairs .    Invertible Matrices and Moving Between Grid Systems     "
},
{
  "id": "carter-caves-revisited",
  "level": "2",
  "url": "sec31-gridding-space.html#carter-caves-revisited",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " Carter Caves State Park: Revisited   Descartes Fly   "
},
{
  "id": "descartes-fly-revisited",
  "level": "2",
  "url": "sec31-gridding-space.html#descartes-fly-revisited",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " Descartes' Fly: Revisited   Descartes Fly   "
},
{
  "id": "fly-standard-grid-revisit",
  "level": "2",
  "url": "sec31-gridding-space.html#fly-standard-grid-revisit",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": "  Fly and Grid   "
},
{
  "id": "fly-vectors-grid-revisit",
  "level": "2",
  "url": "sec31-gridding-space.html#fly-vectors-grid-revisit",
  "type": "Figure",
  "number": "3.1.4",
  "title": "",
  "body": "  Fly and Grid   "
},
{
  "id": "fly-grids-both-revisit",
  "level": "2",
  "url": "sec31-gridding-space.html#fly-grids-both-revisit",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": "  Fly and Both Grids   "
},
{
  "id": "bases-spanning-4",
  "level": "2",
  "url": "sec31-gridding-space.html#bases-spanning-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordered "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
