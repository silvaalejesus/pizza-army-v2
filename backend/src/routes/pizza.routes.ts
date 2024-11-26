import { Request, Response, Router } from "express";
import { AppDataSource } from "../data-source";
import { Pizzas } from "../entity/Pizza";

const pizzasRouter = Router();

pizzasRouter.post("/", async (request: Request, response: Response) => {
  try {
    const saboresRepository = AppDataSource.getRepository(Pizzas);
    const novoSabor = await saboresRepository.save(request.body);

    // Envia a resposta e retorna Promise<void>
    response.status(201).json(novoSabor);
    return;
  } catch (error) {
    console.log("error.message -> sabores ", error.message);
    response.status(500).json({ error: "Erro ao salvar sabor" });
  }
});

pizzasRouter.get("/", async (_, response: Response) => {
  response.json(await AppDataSource.getRepository(Pizzas).find());
});

// pizzasRouter.get("/:flavor", async (request: Request, response: Response) => {
//   const respository = AppDataSource.getRepository(Pizzas);
//   const res = await respository.find({
//     where: {
//       flavor: request.params.flavor,
//     },
//   });
//   console.log("res", res);
//   response.json(res);
// });

pizzasRouter.get("/:id", async (request: Request, response: Response) => {
  const respository = AppDataSource.getRepository(Pizzas);
  const id = request.params.id;
  console.log("id", id);
  const pizzaId = Number(id);
  try {
    const pizza = await respository.findOneBy({ id: id });

    if (pizza) {
      console.log("pizza", pizza);
      response.json(pizza);
    } else {
      response.status(404).json({ message: "Pizza não encontrada" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Erro ao buscar pizza" });
  }
});

pizzasRouter.put("/:id", async (request: Request, response: Response) => {
  try {
    const respository = AppDataSource.getRepository(Pizzas);
    const sabor = await respository.findOneBy({
      id: request.params.id,
    });

    if (!sabor) {
      response.status(404).json({ message: "Sabor não encontrado" });
      return;
    }

    sabor.flavor = request.body.flavor;
    sabor.description = request.body.description;
    sabor.price = request.body.price;
    sabor.size = request.body.size;
    sabor.slices = request.body.slices;
    sabor.fotoUrl = request.body.fotoUrl;
    sabor.quantity = request.body.quantity;

    const atualizarSabor = await respository.save(sabor);
    response.status(204).json(atualizarSabor);

    return;
  } catch (error) {
    console.log("error", error);
    response.status(500).json({ message: "Erro interno do servidor" });
  }
});

pizzasRouter.delete("/:id", async (request: Request, response: Response) => {
  try {
    const repository = AppDataSource.getRepository(Pizzas);
    const sabor = await repository.findOneBy({
      id: request.params.id,
    });

    if (!sabor) {
      response.status(404).json({ message: "Sabor não encontrado" });
    }

    await repository.remove(sabor);
    response.status(200).json({ message: "Sabor deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar sabor:", error);
    response.status(500).json({ message: "Erro interno do servidor" });
  }
});

export default pizzasRouter;
