<?php
// src/Controller/PaylinkReactController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PaylinkReactController extends AbstractController
{

    public function getData($id)
    {
        $data = [
            'id' => 1
        ];
        return $data;
    }

    #[Route('/paylink/react/{id}')]
    public function main($id): Response
    {

        $data = [
            'id' => $id,
            'data' => $this->getData($id)
        ];

        return $this->render('paylink/react-components.html.twig', [
            'id' => $data['id'],
            'data' => $data['data']
        ]);
    }
}
